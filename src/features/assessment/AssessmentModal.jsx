import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";

const StyledAssessmentContent = styled.div`
  width: 90rem;
  margin: 0 auto;
`;

const Intro = styled.h2`
  color: var(--color-grey-600);
  font-size: 4rem;
  margin-bottom: 2rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-grey-500);
`;

const Div = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 2rem;
`;

function AssessmentModal() {
  const navigate = useNavigate();

  return (
    <StyledAssessmentContent>
      <Intro>Discover Your Learning Path: Take the Assessment</Intro>

      <Description>
        Welcome to our personalized learning assessment! At PathFinder, we
        believe in tailoring your learning journey to match your interests,
        skills, and goals. This assessment will help you discover the ideal
        technology roadmap based on your preferences. It's like having a
        personal guide on your path to expertise. So, let's get started! Answer
        a few questions, and we'll recommend the perfect learning pathway that
        aligns with your aspirations. Get ready to embark on a learning
        adventure customized just for you.
      </Description>

      <Div>
        <Button size="large" onClick={() => navigate("/assessment")}>
          TAKE ASSESSMENT NOW &rarr;
        </Button>
      </Div>
    </StyledAssessmentContent>
  );
}

export default AssessmentModal;
