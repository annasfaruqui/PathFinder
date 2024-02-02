import styled, { css } from "styled-components";

const HighlightContainer = styled.div`
  background-color: var(--color-brand-100);
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  gap: 3rem;
  border-radius: var(--border-radius-lg);

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      align-items: stretch;
    `}

  & p {
    color: var(--color-grey-900);
    font-size: 2rem;
  }
`;

HighlightContainer.defaultProps = {
  type: "vertical",
};

export default HighlightContainer;
