import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProgressSummaryCards from "./ProgressSummaryCards";

const SummaryContainer = styled.div`
  grid-column: 1/-1;
`;

function ProgressSummary() {
  return (
    <SummaryContainer>
      <Row>
        <Heading as="h2">Progress Summary</Heading>
        <div>
          <ProgressSummaryCards />
        </div>
      </Row>
    </SummaryContainer>
  );
}

export default ProgressSummary;
