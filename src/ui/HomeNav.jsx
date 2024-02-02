import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import SpinnerMini from "./SpinnerMini";
import DarkModeToggle from "./DarkModeToggle";
import Button from "./Button";
import Logo from "./Logo";

import { useUser } from "../features/authentication/useUser";

const Nav = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;
  height: 10rem;
  z-index: 10;
  /* background-color: var(--backdrop-color); */
  background-color: var(--color-grey-opacity-2);
  backdrop-filter: blur(3px);
  padding: 1.2rem 2.4rem;
  border-bottom: 0.2px solid var(--color-grey-400);

  overflow: hidden;

  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: space-between;
`;

const MainNav = styled.ul`
  background-color: var(--color-grey-opacity-1);
  list-style: none;

  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 2rem;
  overflow: hidden;
  border: 2px solid var(--color-grey-300);
  border-radius: var(--border-radius-xxl);
`;

const Li = styled.li`
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: var(--border-radius-lg);
  transition: all 0.3s;

  &:last-child {
    padding: 1rem 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-600);
    padding: 0.5rem 1.2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function HomeNav() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  function handleLogin() {
    if (!isLoading && !isAuthenticated) navigate("/login");
    if (isLoading) return <SpinnerMini />;
    if (isAuthenticated) navigate("/dashboard");
  }

  return (
    <Nav>
      <Logo />
      <MainNav>
        <Li>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/articles">Articles</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/team">Team</StyledNavLink>
        </Li>
        <Li>
          <DarkModeToggle />
        </Li>
      </MainNav>
      <ButtonContainer>
        {!isAuthenticated && (
          <Button variation="secondary" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        )}
        <Button onClick={handleLogin}>
          {isAuthenticated ? "Go to dashboard" : "Log in"}
        </Button>
      </ButtonContainer>
    </Nav>
  );
}

export default HomeNav;
