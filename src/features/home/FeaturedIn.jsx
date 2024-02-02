import styled from "styled-components";

import logoTechCrunch from "../../images/logos/techcrunch.png";
import logoBusinessInsider from "../../images/logos/business-insider.png";
import logoForbes from "../../images/logos/forbes.png";
import logoNewYorkTimes from "../../images/logos/the-new-york-times.png";
import logoUsaToday from "../../images/logos/usa-today.png";

const StyledFeaturedIn = styled.div`
  grid-column: 1/-1;
  margin-bottom: 5rem;

  background-color: #d1d1d1;

  display: grid;
  grid-template-columns: 1fr repeat(12, 10rem) 1fr;
`;

const FeaturedInContent = styled.div`
  grid-column: 2/-2;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const SmallHeading = styled.h4`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  color: #374151;
  text-align: center;
  margin-bottom: 3rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    height: 3.2rem;
    filter: brightness(0);
  }
`;

function FeaturedIn() {
  return (
    <StyledFeaturedIn>
      <FeaturedInContent>
        <SmallHeading>As featured in</SmallHeading>
        <Logos>
          <img src={logoTechCrunch} alt="logo" />
          <img src={logoBusinessInsider} alt="logo" />
          <img src={logoForbes} alt="logo" />
          <img src={logoNewYorkTimes} alt="logo" />
          <img src={logoUsaToday} alt="logo" />
        </Logos>
      </FeaturedInContent>
    </StyledFeaturedIn>
  );
}

export default FeaturedIn;
