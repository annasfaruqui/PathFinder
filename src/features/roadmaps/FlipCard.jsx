import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

const Card = styled.div`
  height: 42rem;
  width: 32rem;
  border-radius: var(--border-radius-lg);

  color: var(--color-grey-700);
  background-color: var(--color-brand-100);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const CardFront = styled(Card)`
  position: relative;

  & h2 {
    position: absolute;
    left: 50%;
    top: 32rem;
    transform: translateX(-50%);

    font-size: 2.8rem;
    color: #eee;
    text-align: center;
  }
`;

const CardBack = styled(Card)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  text-align: center;

  & h2 {
    font-weight: 800;
    font-size: 3rem;
  }

  & p {
    font-weight: 300;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled.button`
  border: 0;
  color: var(--color-grey-500);
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;
  background-color: var(--color-brand-50);
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #eee;
    background-color: var(--color-brand-500);
  }

  &:focus {
    outline: none;
  }
`;

function FlipCard({ title, description, link, background }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleHover(e) {
    e.preventDefault();
    setIsFlipped((flipped) => !flipped);
  }

  const navigate = useNavigate();

  return (
    <div>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={0.5}
        flipSpeedFrontToBack={0.5}
      >
        <CardFront
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1),rgba(0,0,0,0.6)),url(${background})`,
          }}
          onMouseOver={handleHover}
        >
          <h2>{title}</h2>
        </CardFront>

        <CardBack onMouseLeave={handleHover}>
          <h2>{title}</h2>
          <p>{description}</p>

          <StyledLink onClick={() => navigate(`/roadmaps/${link}`)}>
            Click Here To Access The Roadmap
          </StyledLink>
        </CardBack>
      </ReactCardFlip>
    </div>
  );
}

export default FlipCard;
