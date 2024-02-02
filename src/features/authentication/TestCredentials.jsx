import styled from "styled-components";

const StyledTestCredentials = styled.div`
  /* margin-top: 1rem; */
  padding: 5px 1rem;
  border: 1px solid var(--color-brand-200);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  & p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey-600);

    & span {
      margin-left: 1rem;
      background-color: var(--color-brand-200);
    }
  }
`;

function TestCredentials() {
  return (
    <StyledTestCredentials>
      <p>
        Test Email: <span>demo@pathfinder.com</span>
      </p>
      <p>
        Test Password: <span>demo1234</span>
      </p>
    </StyledTestCredentials>
  );
}

export default TestCredentials;
