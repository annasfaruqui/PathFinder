import styled from "styled-components";
import ButtonLink from "../../ui/ButtonLink";
import { capitalizeFirstLetterEveryWord } from "../../utils/capitalizer";

const SummaryCard = styled.div`
  background-color: var(--color-grey-100);

  width: 100%;
  border-radius: var(--border-radius-xl);
  border: 2px solid var(--color-brand-200);
  box-shadow: var(--shadow-md);

  overflow: hidden;
`;

const MainDiv = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const Title = styled.h3`
  width: 100%;
  height: 12rem;
  background-color: var(--color-brand-50);
  border-bottom: 1px solid var(--color-brand-500);

  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-brand-600);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percentage = styled.div`
  margin-top: 1rem;
  font-weight: 300;
  text-align: center;

  & h2 {
    font-weight: 500;
    font-size: 2rem;
    color: var(--color-grey-600);
  }

  & strong {
    font-size: 4rem;
    font-weight: 500;
    color: var(--color-brand-600);
  }
`;

const Ratio = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;

  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: var(--color-brand-50);
  border: 1px solid var(--color-brand-500);
  border-radius: var(--border-radius-md);

  & span {
    font-size: 2rem;
    color: var(--color-brand-600);
  }
`;

const Cta = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & p {
    text-align: center;
    line-height: 1.25;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--color-grey-900);
  }
`;

function ProgressSummaryCard({ el }) {
  const { roadmap, totalLength, numCompletedTopics, completionPercentage } = el;

  console.log(completionPercentage);

  return (
    <SummaryCard>
      <Title>{capitalizeFirstLetterEveryWord(roadmap)}</Title>
      <MainDiv>
        <Percentage>
          <h2>Your Progress:</h2>
          <p>
            <span>
              <strong>{completionPercentage} %</strong>
            </span>
            <br />
            completed
          </p>
        </Percentage>
        <Ratio>
          <span>
            {numCompletedTopics} / {totalLength}
          </span>{" "}
          topics completed
        </Ratio>

        <Cta>
          <p>Look at you go! You have been making excellent progress. 🥳</p>
          <p>Continue on with your journey and unlock your career path</p>
          <ButtonLink to={`/roadmaps/${roadmap}`}>Continue Learning</ButtonLink>
        </Cta>
      </MainDiv>
    </SummaryCard>
  );
}

export default ProgressSummaryCard;
