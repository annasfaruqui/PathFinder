import styled from "styled-components";
import Team from "../features/team/Team";

import { useScrollToTop } from "../hooks/useScrollToTop";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

function TeamPage() {
  useScrollToTop();

  return (
    <Container>
      <Team />
    </Container>
  );
}

export default TeamPage;
