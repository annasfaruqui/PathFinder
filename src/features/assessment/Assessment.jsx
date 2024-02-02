import styled from "styled-components";

import "./Assessment.css";

import AssessmentTest from "./AssessmentTest";
import DarkModeToggle from "../../ui/DarkModeToggle";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";

import { useMoveBack } from "../../hooks/useMoveBack";

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  height: 100vh;
  background-color: var(--color-grey-50);
`;

const FullContainer = styled.div`
  grid-column: 2/-2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: var(--color-brand-200);

  min-height: 80vh;
  width: 100rem;
  margin: 10rem auto auto auto;

  padding: 2rem 2rem;
  border-radius: var(--border-radius-lg);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TopLeft = styled.div`
  position: absolute;

  padding: 0 0.6rem;
  top: 1rem;
  left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopRight = styled.div`
  position: absolute;
  background-color: var(--color-brand-50);

  border: 2px solid var(--color-brand-100);
  border-radius: var(--border-radius-lg);
  top: 1rem;
  right: 1rem;

  padding: 1rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const PageHeading = styled.h1`
  padding: 2rem 4rem;
  background-color: var(--color-brand-100);
  font-size: 5.2rem;
  font-weight: 500;
  text-align: center;
  border-radius: var(--border-radius-sm);
`;

const PageContent = styled.div`
  margin: auto 0;
  height: 75%;
  width: 100%;
  padding: 3rem 4rem;
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-md);
`;

function Assessment() {
  const moveback = useMoveBack();

  return (
    <Body>
      <FullContainer>
        <TopLeft>
          <Logo />
        </TopLeft>
        <TopRight>
          <DarkModeToggle />
          <Button variation="secondary" onClick={moveback}>
            Back
          </Button>
        </TopRight>
        <Container>
          <PageHeading>Interactive Assessment 📃</PageHeading>
          <PageContent>
            <AssessmentTest />
          </PageContent>
        </Container>
      </FullContainer>
    </Body>
  );
}

export default Assessment;
