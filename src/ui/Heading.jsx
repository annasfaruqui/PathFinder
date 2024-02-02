import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.4;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.4;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.4;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      line-height: 1.4;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2.8rem;
      font-weight: 600;
      line-height: 1.4;
    `} 

    ${(props) =>
    props.as === "h1" &&
    props.type === "heading" &&
    css`
      font-size: 5.2rem;
      font-weight: 300;
      line-height: 1.3;
      letter-spacing: -1.2px;
      color: var(--color-grey-800);
    `}    

    ${(props) =>
    props.as === "h2" &&
    props.type === "heading-secondary" &&
    css`
      font-size: 4rem;
      font-weight: 500;
      line-height: 1.3;
    `}

    ${(props) =>
    props.center === "true" &&
    css`
      margin: 0 auto;
    `}

    ${(props) =>
    props.textCenter === "true" &&
    css`
      text-align: center;
    `}


    margin-bottom:1rem;
`;

export default Heading;
