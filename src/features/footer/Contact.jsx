import styled from "styled-components";

import FooterHeading from "./FooterHeading";

const Container = styled.div`
  padding: 2rem 1rem;
  padding-right: 3rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

const ContactInfo = styled.div`
  color: #e5e7eb;

  & p {
    margin-bottom: 2rem;
  }
`;

const ContactLink = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    &:link,
    &:visited {
      text-decoration: none;
      color: #9ca3af;
      transition: all 0.3s;
    }

    &:hover,
    &:active {
      color: #f3f4f6;
    }
  }
`;

function Contact() {
  return (
    <Container>
      <FooterHeading>Contact us</FooterHeading>
      <ContactInfo>
        <p>624 Rendezvous St. 2nd Floor, ABC City, FCB 94107</p>
        <ContactLink>
          <a href="tel:123-456-7890">123-456-7890</a>
          <a href="mailto:hello@pathfinder.com">hello@pathfinder.com</a>
        </ContactLink>
      </ContactInfo>
    </Container>
  );
}

export default Contact;
