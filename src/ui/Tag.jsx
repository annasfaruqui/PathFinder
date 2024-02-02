import styled, { css } from "styled-components";

const Tag = styled.p`
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}rem !important;
    `}

  display: inline;
  width: auto;
  padding: 0 2px;
  /* font-size: 2rem; */
  font-weight: 500;
  position: relative;
  z-index: 5;
  margin-bottom: 1.6rem;

  ::after {
    content: "";
    position: absolute;
    display: block;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    transform: scale(1.07, 1.05) skewX(-15deg);
    background-color: var(--color-brand-100);
    z-index: -1;
    opacity: 0.8;
  }
`;

Tag.defaultProps = {
  fontSize: "1.8",
};

export default Tag;
