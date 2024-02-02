import styled from "styled-components";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import companyImage from "../../images/about/company-img.jpg";

const StyledAboutUs = styled.div`
  display: flex;
  gap: 4rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;

const Description = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const Img = styled.img`
  width: 60rem;
  border-radius: var(--border-radius-xl);
`;

function AboutUs() {
  return (
    <StyledAboutUs>
      <Content>
        <SectionHeading>About us</SectionHeading>
        <Title>
          We are the ultimate destination for tech enthusiasts, aspiring
          developers, and lifelong learners.
        </Title>
        <Description>
          Our platform is designed to guide you on your journey to mastering a
          wide array of cutting-edge technologies. We're passionate about
          helping individuals like you navigate the ever-evolving tech landscape
          and achieve your goals.
        </Description>
      </Content>
      <Img src={companyImage} alt="company with employees" />
    </StyledAboutUs>
  );
}

export default AboutUs;
