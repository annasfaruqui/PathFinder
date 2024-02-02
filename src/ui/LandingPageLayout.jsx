import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import HomeNav from "./HomeNav";
import JoinCommunity from "./JoinCommunity";
import Footer from "./Footer";

import bgImg from "../images/sections-header-image.jpg";

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, 10rem) 1fr;
  grid-template-rows: repeat(3, auto);
  background-color: var(--color-grey-50);
`;

const PageHeader = styled.div`
  grid-column: 1/-1;
  grid-row: 1;

  height: 80vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  position: relative;
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
`;

const PageTitle = styled.h1`
  color: #eee;
  font-size: 10rem;
  font-weight: 500;
`;

const Container = styled.div`
  grid-column: 2/-2;
  grid-row: 2;
`;

const JoinCommunityContainer = styled.div`
  grid-column: 1/-1;
`;

const FooterContainer = styled.div`
  grid-column: 1/-1;
`;

function LandingPageLayout() {
  const location = useLocation();

  return (
    <>
      <HomeNav />
      <Body>
        <PageHeader>
          <ContentBox>
            <PageTitle>{location.pathname.slice(1).toUpperCase()}</PageTitle>
          </ContentBox>
        </PageHeader>
        <Container>
          <Outlet />
        </Container>
        <JoinCommunityContainer>
          <JoinCommunity />
        </JoinCommunityContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Body>
    </>
  );
}

export default LandingPageLayout;
