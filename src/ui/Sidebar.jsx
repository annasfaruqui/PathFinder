import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 5rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
