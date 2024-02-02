import styled, { css } from "styled-components";
import { Link } from "react-scroll";

import heroImg from "../../images/sections-header-image.jpg";

const StyledHero = styled.div`
  grid-column: 1/-1;
  grid-row: 1;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`;

const ContentBox = styled.div`
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Intro = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.4px;
  margin-bottom: 1rem;
  color: #9fb3ff;
`;

const Title = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.1px;
  word-spacing: 5px;
  margin-bottom: 2rem;

  & span {
    color: #9fb3ff;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SmoothScrollButtonLink = styled(Link)`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  font-weight: 500;

  cursor: pointer;

  ${(props) =>
    props.type === "primary" &&
    css`
      color: #eef2ff;
      background-color: var(--color-brand-600);

      &:hover {
        background-color: var(--color-brand-700);
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      color: var(--color-grey-600);
      background: var(--color-grey-0);
      border: 1px solid var(--color-grey-200);

      &:hover {
        background-color: var(--color-grey-50);
      }
    `}

  &:focus {
    outline: 0;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <ContentBox>
        <Intro>Start learning now</Intro>
        <Title>
          Your path to <span>tech expertise</span> starts here
        </Title>
        <Description>
          Unlock Your Potential in Tech: Explore Guided Roadmaps to Master
          Frontend and Backend Development, Data Science, Cybersecurity, and
          More – Your Journey Starts Here!
        </Description>
        <ButtonContainer>
          <SmoothScrollButtonLink
            type="primary"
            to="roadmaps-section"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1500}
          >
            Start Exploring
          </SmoothScrollButtonLink>

          <SmoothScrollButtonLink
            type="secondary"
            to="learn-more"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1000}
          >
            Learn more &darr;
          </SmoothScrollButtonLink>
        </ButtonContainer>
      </ContentBox>
    </StyledHero>
  );
}

export default Hero;
