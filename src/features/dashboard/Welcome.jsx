import styled from "styled-components";

import Heading from "../../ui/Heading";

import { useUser } from "../authentication/useUser";

const StyledWelcome = styled.div`
  grid-column: 1 / span 2;
`;

const Highlight = styled.span`
  position: relative;
  z-index: 5;

  & span {
    padding: 0 2rem;
    font-weight: 500;
  }

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

function Welcome() {
  const { user } = useUser();
  const { fullName } = user.user_metadata;

  return (
    <StyledWelcome>
      <Heading as="h1" type="heading">
        <Highlight>Welcome</Highlight>
        <br />
        <Highlight>to your Dashboard,</Highlight>
        <br />
        <Highlight>
          <span>{fullName}</span>
        </Highlight>
      </Heading>
    </StyledWelcome>
  );
}

export default Welcome;
