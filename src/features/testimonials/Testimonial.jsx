import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { MAX_RATING } from "../../utils/constants";

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  background-color: var(--color-grey-0);
  padding: 2rem;
  border: 1px solid var(--color-brand-500);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  overflow: hidden;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Occupation = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-500);
`;

const Rating = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  & p {
    font-size: 2.4rem;

    & svg {
      color: var(--color-brand-500);
    }
  }
`;

const UserTestimonial = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
`;

function Testimonial({ testimonial }) {
  return (
    <TestimonialContainer>
      <ProfileContainer>
        <ImgContainer>
          <img src={testimonial.image} alt={testimonial.name} />
        </ImgContainer>
        <Profile>
          <Name>{testimonial.name}</Name>
          <Occupation>{testimonial.occupation}</Occupation>
        </Profile>
      </ProfileContainer>
      <Rating>
        <p>
          {Array.from({ length: testimonial.stars }, (_, i) => (
            <span key={i}>
              <AiFillStar />
            </span>
          ))}
          {Array.from({ length: MAX_RATING - testimonial.stars }, (_, i) => (
            <span key={i}>
              <AiOutlineStar />
            </span>
          ))}
        </p>
      </Rating>
      <UserTestimonial>"{testimonial.testimonial}"</UserTestimonial>
    </TestimonialContainer>
  );
}

export default Testimonial;
