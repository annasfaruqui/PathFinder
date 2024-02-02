import styled from "styled-components";

const StyledError = styled.div`
  height: 20rem;
  width: 100rem;
  margin: 10rem auto;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-red-100);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.div`
  color: var(--color-red-700);

  font-size: 4rem;
  font-weight: 500;
  text-align: center;
`;

function Error({ message }) {
  return (
    <StyledError>
      <P>
        <span>💥⛔</span>
        {message}
        <span>⛔💥</span>
      </P>
    </StyledError>
  );
}

export default Error;
