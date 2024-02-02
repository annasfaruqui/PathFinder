import styled from "styled-components";

import SectionHeading from "../../ui/SectionHeading";
import SubHeading from "../../ui/SubHeading";

import checkout from "../../images/home/how-it-works/check-website.jpg";
import explore from "../../images/home/how-it-works/explore-roadmaps.jpg";
import doubt from "../../images/home/how-it-works/dont-know-where.jpg";
import createPath from "../../images/home/how-it-works/create-your-path.jpg";
import inspired from "../../images/home/how-it-works/stay-inspired.jpg";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  padding: 2rem 1rem;
`;

const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const ContentTitle = styled.h4`
  font-size: 2.8rem;
  /* color: var(--color-grey-500); */
  /* margibn */

  & span {
    display: block;
    font-size: 8rem;
    line-height: 0.9;
  }
`;

const ContentDescription = styled.p`
  color: var(--color-grey-500);
  font-size: 1.8rem;

  & strong {
    font-size: 2rem;
    color: var(--color-brand-500);
  }
`;

const ImgContainer = styled.div`
  width: 90rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    border-radius: var(--border-radius-lg);
  }
`;

function ListItem({ children }) {
  return <StyledListItem>{children}</StyledListItem>;
}

function HowItWorks() {
  return (
    <div>
      <SectionHeading id="learn-more">How it works</SectionHeading>{" "}
      {/* for smooth scrolling using react-scroll */}
      <SubHeading>
        Unlock your path to tech mastery in 5 straightforward stages on our
        platform
      </SubHeading>
      <List>
        <ListItem>
          <ContentContainer>
            <ContentTitle>
              <span>01</span>Check out our web application
            </ContentTitle>
            <ContentDescription>
              Before you dive into our wealth of resources, we invite you to
              explore the website itself to get the most out of your visit. Once
              you've had a glimpse of what we offer, you'll be better equipped
              to navigate our website and discover the resources that align with
              your interests and goals.
            </ContentDescription>
          </ContentContainer>
          <ImgContainer>
            <img src={checkout} alt="Checking out the website" />
          </ImgContainer>
        </ListItem>

        <ListItem>
          <ImgContainer>
            <img src={explore} alt="Exploring roadmaps" />
          </ImgContainer>
          <ContentContainer>
            <ContentTitle>
              <span>02</span>Explore our learning roadmaps
            </ContentTitle>
            <ContentDescription>
              Discover the technology domains and learning paths that interest
              you the most. Our meticulously curated roadmaps cater to
              beginners, intermediates, and advanced learners. Choose your
              starting point and embark on a structured journey to mastery.
              <br />
              <strong>
                Sign up to create an account and keep track of your progress.
              </strong>
            </ContentDescription>
          </ContentContainer>
        </ListItem>

        <ListItem>
          <ContentContainer>
            <ContentTitle>
              <span>03</span>Don't know where to start? Take our psychometric
              assessment
            </ContentTitle>
            <ContentDescription>
              Our assessment test isn't just a formality; it's your key to
              unlocking a learning journey that suits you like a glove. By
              taking this test, you gain invaluable insights into your current
              knowledge and skills, helping us understand your unique learning
              needs. Armed with this information, we can recommend the perfect
              technology roadmap to match your proficiency level and align with
              your specific goals.
              <br />
              <strong>Take assessment now &rarr;</strong>
            </ContentDescription>
          </ContentContainer>
          <ImgContainer>
            <img src={doubt} alt="Don't know where to start" />
          </ImgContainer>
        </ListItem>

        <ListItem>
          <ImgContainer>
            <img src={createPath} alt="Create your own path" />
          </ImgContainer>
          <ContentContainer>
            <ContentTitle>
              <span>04</span>Create Your Learning Path
            </ContentTitle>
            <ContentDescription>
              Tailor your tech education to your unique goals. Mix and match
              learning resources, experiment with new technologies, and
              customize your learning path. Your journey is yours to design.
            </ContentDescription>
          </ContentContainer>
        </ListItem>

        <ListItem>
          <ContentContainer>
            <ContentTitle>
              <span>05</span>Stay Inspired
            </ContentTitle>
            <ContentDescription>
              In the fast-paced world of technology, it's essential to stay
              inspired. Our platform is here to guide and motivate you as you
              progress along your tech journey. Celebrate your achievements and
              keep aiming for new heights.
            </ContentDescription>
          </ContentContainer>
          <ImgContainer>
            <img src={inspired} alt="Stay inspired" />
          </ImgContainer>
        </ListItem>
      </List>
    </div>
  );
}

export default HowItWorks;
