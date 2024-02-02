import styled from "styled-components";

import Hero from "../features/home/Hero";
import FeaturedIn from "../features/home/FeaturedIn";
import HomeContent from "../features/home/HomeContent";
import Testimonials from "../features/testimonials/Testimonials";
import HomeNav from "../ui/HomeNav";
import JoinCommunity from "../ui/JoinCommunity";
import Footer from "../ui/Footer";

import { useScrollToTop } from "../hooks/useScrollToTop";

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, 10rem) 1fr;
  grid-template-rows: 105vh repeat(4, auto);
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  grid-column: 2/-2;
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 4rem;
  grid-column: 1/-1;
`;

const FooterContainer = styled.div`
  grid-column: 1/-1;
`;

function HomePage() {
  useScrollToTop();

  return (
    <Body>
      <HomeNav />
      <Hero />
      <FeaturedIn />
      <Container>
        <HomeContent />
      </Container>
      <TestimonialsContainer>
        <Testimonials />
      </TestimonialsContainer>
      <FooterContainer>
        <JoinCommunity />
        <Footer />
      </FooterContainer>
    </Body>
  );
}

export default HomePage;
