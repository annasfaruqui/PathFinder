import styled from "styled-components";
import { LiaHandPointRight } from "react-icons/lia";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import img from "../../images/about/company-mission.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  gap: 2rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 1rem 0;

  & p {
    font-size: 2rem;
    line-height: 1.4;
  }
`;

const ImgBox = styled.div`
  padding: 1rem 2rem;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--border-radius-lg);

  color: #eee;
`;

const Reasons = styled.div`
  & p {
    font-size: 2rem;

    & span {
      display: inline-block;
      margin-top: 2rem;
      font-size: 1.9rem;
    }
  }
`;

const List = styled.ul`
  list-style: none;

  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.8rem;

  & li {
    display: flex;
    align-items: start;
    gap: 1rem;

    & svg {
      margin-top: 5px;
    }
  }
`;

function Mission() {
  return (
    <Container>
      <SectionHeading>Our Mission</SectionHeading>

      <Content>
        <DescriptionBox>
          <p>
            At PathFinder, our mission is to empower learners of all levels to
            master the technologies and skills that matter most in today's
            digital age. We believe in the power of structured learning paths
            and curated resources to make your journey smoother and more
            rewarding.
          </p>

          <p>
            Our mission is to provide you with the tools and resources you need
            to succeed, so you can build a brighter future in the tech industry.
          </p>
        </DescriptionBox>

        <ImgBox>
          <Title>Why we do it</Title>
          <Reasons>
            <p>
              We understand that technology is a force that shapes our world,
              and we're passionate about equipping you with the skills and
              knowledge to thrive in this digital age. <br />
              <span>By democratizing tech education, we aim to:</span>
            </p>

            <List>
              <li>
                <span>
                  <LiaHandPointRight />
                </span>
                Help individuals transition into tech careers, no matter their
                starting point.
              </li>
              <li>
                <span>
                  <LiaHandPointRight />
                </span>
                Support tech professionals in their ongoing growth and skill
                development.
              </li>
              <li>
                <span>
                  <LiaHandPointRight />
                </span>
                Foster innovation and creativity by making technology learning
                accessible to all.
              </li>
            </List>
          </Reasons>
        </ImgBox>
      </Content>
    </Container>
  );
}

export default Mission;
