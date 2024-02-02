import styled from "styled-components";

import FooterLogoCol from "../features/footer/FooterLogoCol";
import Contact from "../features/footer/Contact";
import Account from "../features/footer/Account";
import About from "../features/footer/About";
import Help from "../features/footer/Help";

const StyledFooter = styled.div`
  /* margin-top: 6rem; */
  border-top: 1px solid var(--color-grey-300);
  background-color: #1c1f2a;

  padding: 9rem 7rem;
  display: grid;
  grid-template-columns: 1.7fr 2fr repeat(3, 1fr);
  gap: 3rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterLogoCol />
      <Contact />
      <Account />
      <About />
      <Help />
    </StyledFooter>
  );
}

export default Footer;
