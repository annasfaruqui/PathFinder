import styled from "styled-components";

import SectionHeading from "../../ui/SectionHeading";
import SubHeading from "../../ui/SubHeading";

import diverse from "../../images/home/features/diverse-content.jpg";
import upToDate from "../../images/home/features/up-to-date.jpg";
import structured from "../../images/home/features/structured.jpg";

const ImgContainer = styled.div`
  width: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  & li {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;

  & h4 {
    font-size: 2.6rem;
    color: var(--color-grey-600);
  }

  & p {
    font-size: 2rem;
    font-weight: 300;
  }
`;

function Features() {
  return (
    <div>
      <SectionHeading>Features</SectionHeading>
      <SubHeading>What Sets Us Apart</SubHeading>

      <FeaturesList>
        <li>
          <ContentContainer>
            <h4>Structured Learning Paths</h4>
            <p>
              We've meticulously curated roadmaps for different technology
              domains, breaking down complex topics into bite-sized, actionable
              steps. Whether you're a beginner or an experienced developer,
              you'll find a roadmap tailored to your needs.
            </p>
          </ContentContainer>
          <ImgContainer>
            <img src={structured} alt="Structured learning paths" />
          </ImgContainer>
        </li>

        <li>
          <ContentContainer>
            <h4>Up-to-Date Resources</h4>
            <p>
              In the fast-paced world of technology, staying current is crucial.
              We continuously update our resources to ensure you have access to
              the latest tools, frameworks, and best practices.
            </p>
          </ContentContainer>
          <ImgContainer>
            <img src={upToDate} alt="Up-to-date resources" />
          </ImgContainer>
        </li>

        <li>
          <ContentContainer>
            <h4>Diverse Content</h4>
            <p>
              From frontend and backend development to cybersecurity and
              software architecture, we cover a wide range of tech topics. No
              matter where your interests lie, we have something for you.
            </p>
          </ContentContainer>
          <ImgContainer>
            <img src={diverse} alt="diverse content" />
          </ImgContainer>
        </li>
      </FeaturesList>
    </div>
  );
}

export default Features;
