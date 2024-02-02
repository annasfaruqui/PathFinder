import styled from "styled-components";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

const UserLayout = styled.main`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 70rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SignupPage() {
  return (
    <UserLayout>
      <Flex>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Heading as="h4" center="true">
          Create your new account
        </Heading>
        <SignupForm />
      </Flex>
    </UserLayout>
  );
}

export default SignupPage;
