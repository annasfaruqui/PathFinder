import styled from "styled-components";

import GlobalP from "../../styles/GlobalP";

import Quotations from "../../ui/Quotations";
import SectionHeading from "../../ui/SectionHeading";
import SubHeading from "../../ui/SubHeading";

const Container = styled.div`
  grid-column: 1/8;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 1.6rem;
`;

function RoadmapSection() {
  return (
    <Container id="roadmaps-section">
      <SectionHeading>Importance of Roadmaps</SectionHeading>
      <SubHeading>Why are roadmaps so important in learning?</SubHeading>

      <Description>
        A roadmap is your compass in the ever-evolving landscape of technology.
        It serves as a structured guide that not only charts the course but also
        illuminates the milestones along your learning journey. Without a
        roadmap, you risk wandering aimlessly, overwhelmed by the vastness of
        information and unsure of your progress. Our roadmaps provide clarity
        and direction, ensuring that every step you take is purposeful and
        efficient. They empower you to set achievable goals, track your growth,
        and ultimately reach your destination with confidence. Don't navigate
        the tech world without a roadmap; let it be your trusted companion on
        your path to expertise.
      </Description>
      <GlobalP mb={3}>
        Here is what a few notable individuals had to say about the importance
        of roadmaps:
      </GlobalP>
      <StyledGrid>
        <Quotations />
      </StyledGrid>
    </Container>
  );
}

export default RoadmapSection;
