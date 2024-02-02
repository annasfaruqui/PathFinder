import styled from "styled-components";

import SectionHeading from "../../ui/SectionHeading";
import SubHeading from "../../ui/SubHeading";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import AssessmentModal from "../assessment/AssessmentModal";

const FullConatiner = styled.div`
  grid-column: 8/-1;
  margin-left: 4rem;
`;

const Container = styled.div`
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-lg);

  padding: 2rem;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Intro = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-grey-600);
  margin-bottom: 1rem;
`;

const OutDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
`;

function AssessmentSection() {
  return (
    <FullConatiner>
      <SectionHeading>Assessment</SectionHeading>
      <SubHeading>Take our psychometric assessment test</SubHeading>
      <OutDescription>
        Assessing your tech skills is not just a step in your journey; it's the
        key to unlocking a personalized learning experience tailored to your
        unique needs. Our assessment isn't a mere formality; it's your roadmap
        to success. By taking this evaluation, you gain a clear understanding of
        where you stand in your tech knowledge, and more importantly, where you
        want to go. The assessment identifies your strengths, highlights areas
        for growth, and aligns your goals with a curated path designed just for
        you. Whether you're starting from scratch or looking to specialize, this
        initial step ensures your time and effort are invested with maximum
        efficiency, accelerating your progress and enhancing your tech
        expertise. Embrace the power of assessment and set yourself on the road
        to tech mastery with confidence
      </OutDescription>
      <Container>
        <div>
          <Intro>Why to take assessment?</Intro>
          <Description>
            Ready to kickstart your journey towards tech mastery but not sure
            where to begin? Take our personalized assessment test! It's your
            first step towards a tailor-made learning experience. Our assessment
            will gauge your current knowledge, skills, and goals, enabling us to
            recommend the perfect roadmap for your unique needs. Whether you're
            a coding newbie or a seasoned pro, our test will ensure your
            learning journey is efficient and effective. Get started now and
            unlock your path to tech expertise!
          </Description>
        </div>

        <Modal>
          <Modal.Open opens="assessment">
            <Button size="large">TAKE ASSESSMENT NOW &rarr;</Button>
          </Modal.Open>
          <Modal.Window name="assessment">
            <AssessmentModal />
          </Modal.Window>
        </Modal>
      </Container>
    </FullConatiner>
  );
}

export default AssessmentSection;
