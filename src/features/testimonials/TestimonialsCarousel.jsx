import styled from "styled-components";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Testimonial from "./Testimonial";

import { testimonials } from "../../data/data-testimonials";

const GridOfThree = styled.div`
  margin: 3rem auto;
  width: 125rem;
  height: 48rem;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(3, 40rem);
  gap: 2rem;
`;

function TestimonialsCarousel() {
  const items = [
    <GridOfThree>
      {testimonials
        .filter((el) => el.id <= 3)
        .map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
    </GridOfThree>,
    <GridOfThree>
      {testimonials
        .filter((el) => el.id > 3 && el.id <= 6)
        .map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
    </GridOfThree>,
    <GridOfThree>
      {testimonials
        .filter((el) => el.id > 6 && el.id <= 9)
        .map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
    </GridOfThree>,
  ];

  return (
    <AliceCarousel
      items={items}
      autoPlay={true}
      autoPlayDirection="ltr"
      autoPlayInterval={3000}
      autoPlayStrategy="none"
      infinite={true}
      animationDuration={1000}
      // disableSlideInfo={false}
      disableButtonsControls={true}
      disableDotsControls={true}
    />
  );
}

export default TestimonialsCarousel;
