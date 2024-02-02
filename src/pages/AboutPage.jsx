import styled from "styled-components";

import AboutUs from "../features/about/AboutUs";
import Mission from "../features/about/Mission";
import Story from "../features/about/Story";

import { useScrollToTop } from "../hooks/useScrollToTop";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

function AboutPage() {
  useScrollToTop();

  return (
    <Container>
      <AboutUs />
      <Story />
      <Mission />
    </Container>
  );
}

export default AboutPage;
