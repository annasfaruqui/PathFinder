import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import { teamMembers } from "../../data/data-teamMembers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardContainer = styled.div`
  margin: 0 auto;
  margin-top: 3rem;

  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border-bottom: 5px solid var(--color-brand-600);
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1%);
    box-shadow: var(--shadow-md);
  }

  &:hover img {
    filter: brightness(0.9);
    transform: scale(1.08);
  }
`;

const ImgContainer = styled.div`
  background-color: var(--color-brand-50);
  overflow: hidden;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 35rem;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  opacity: 1;
  filter: brightness(40%);

  transition: all 0.3s;
`;

const Details = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  /* font-size: 1.8rem; */
  font-size: 2rem;

  font-weight: 600;
  text-align: center;
`;

const Role = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-500);
`;

const Social = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: red; */

  font-size: 2rem;
  color: var(--color-grey-600);
  gap: 2rem;

  & svg:hover {
    color: var(--color-grey-800);
  }
`;

function Team() {
  return (
    <Container>
      <SectionHeading>Our Team</SectionHeading>
      <Title>Meet the team behind PathFinder</Title>

      <CardContainer>
        {teamMembers.map((member) => (
          <CardComponent key={member.id} member={member} />
        ))}
      </CardContainer>
    </Container>
  );
}

function CardComponent({ member }) {
  return (
    <Card>
      <ImgContainer>
        <Img src={member.image} alt={`${member.name}(Team member)`} />
      </ImgContainer>
      <Details>
        <Name>{member.fullName}</Name>
        <Role>{member.role}</Role>
        <Social>
          <span>
            <AiOutlineLinkedin />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiOutlineMail />
          </span>
        </Social>
      </Details>
    </Card>
  );
}

export default Team;
