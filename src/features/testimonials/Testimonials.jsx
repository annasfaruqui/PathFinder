import styled from "styled-components";

import SectionHeading from "../../ui/SectionHeading";
import SubHeading from "../../ui/SubHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Container = styled.div`
  padding: 4rem;
  background-color: var(--color-brand-100);
`;

const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
`;

function Testimonials() {
  return (
    <Container>
      <SectionHeading>Testimonials</SectionHeading>
      <SubHeading>What Our Users Say</SubHeading>

      <Description>
        Don't just take our word for it—hear what our users have to say about
        their experiences with PathFinder. We're proud to have helped countless
        individuals on their tech learning journeys. Here are some of their
        testimonials:
      </Description>

      <TestimonialsCarousel />
    </Container>
  );
}

export default Testimonials;
