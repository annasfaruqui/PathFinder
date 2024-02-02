import styled from "styled-components";
import ProgressSummaryCard from "./ProgressSummaryCard";

import { progress } from "../../data/data-progress";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: 2.4rem;
  margin-top: 2rem;
`;

function ProgressSummaryCards() {
  return (
    <Container>
      {progress.map((el, i) => (
        <ProgressSummaryCard key={i} el={el} />
      ))}
    </Container>
  );
}

export default ProgressSummaryCards;
