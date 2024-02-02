import styled from "styled-components";

import HowItWorks from "./HowItWorks";
import Features from "./Features";
import RoadmapSection from "./RoadmapSection";
import AssessmentSection from "./AssessmentSection";

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10rem;
`;

const SecDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 10rem);
`;

function Home() {
  return (
    <ContainerDiv>
      <HowItWorks />
      <Features />
      <SecDiv>
        <RoadmapSection />
        <AssessmentSection />
      </SecDiv>
    </ContainerDiv>
  );
}

export default Home;
