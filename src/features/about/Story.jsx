import styled from "styled-components";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import meeting from "../../images/about/meeting.jpg";
import learning from "../../images/about/learning.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Content = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: var(--border-radius-xl);

  overflow: hidden;
`;

const Description = styled.p`
  background-color: var(--color-brand-100);
  font-size: 2rem;

  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 60rem;
  margin: 0 auto;
`;

function Story() {
  return (
    <Container>
      <SectionHeading>Our story</SectionHeading>
      <Title>
        Our story is one of passion, innovation, and a deep commitment to
        transforming the way people learn and succeed in the ever-evolving world
        of technology.
      </Title>
      <Content>
        <Description>
          PathFinder was founded with a simple yet ambitious goal: to make
          technology learning accessible, structured, and enjoyable. We believe
          that anyone can learn and thrive in the tech industry with the right
          roadmap and resources.
        </Description>
        <Img src={learning} alt="learning with right resources" />

        <Img src={meeting} alt="important meeting" />

        <Description>
          Our journey began in 2023 with a shared vision to revolutionize tech
          education. Frustrated by the lack of clear learning paths and
          resources, a group of tech enthusiasts came together to create a
          platform that would change the way people approach learning in the
          tech industry.
        </Description>
      </Content>
    </Container>
  );
}

export default Story;
