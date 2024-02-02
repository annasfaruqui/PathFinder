import styled from "styled-components";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginPage() {
  return (
    <LoginLayout>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Heading as="h4" center="true">
        Log in to your account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default LoginPage;
