import styled from "styled-components";

import FlipCard from "./FlipCard";

import { dataFlipCard } from "../../data/data-flipcards";

const FlipCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  padding: 1.4rem;
  align-items: center;
  justify-items: center;
`;

function FlipCards() {
  return (
    <FlipCardsGrid>
      {dataFlipCard.map((el, i) => (
        <FlipCard
          key={i}
          title={el.title}
          description={el.description}
          link={el.link}
          background={el.background}
        />
      ))}
    </FlipCardsGrid>
  );
}

export default FlipCards;
