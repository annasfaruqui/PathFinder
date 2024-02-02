import styled, { css } from "styled-components";

const GlobalP = styled.p`
  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.8;

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}rem !important;
    `}
`;

export default GlobalP;
