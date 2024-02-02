import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";
import Button from "./Button";
import Modal from "./Modal";
import AssessmentModal from "../features/assessment/AssessmentModal";

import { useUser } from "../features/authentication/useUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--color-brand-100); */

  padding-top: 10rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  border-top: 1px solid var(--color-grey-300);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  background-color: var(--color-brand-100);
  padding-bottom: 3rem;
  border-radius: var(--border-radius-xl);
`;

const CtaSection = styled.div`
  border-radius: var(--border-radius-lg);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const HeadingLine = styled.h5`
  border-radius: var(--border-radius-xl);
  color: var(--color-brand-700);
  padding: 1rem 3rem;
  font-size: 4.6rem;
  font-weight: 700;
  line-height: 1.3;
`;

const P = styled.p`
  width: 120rem;
  padding: 0 2rem;
  font-size: 2rem;
  font-weight: 600;

  margin-top: 2rem;
  color: var(--color-brand-500);
  text-align: center;
`;

function JoinCommunity() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  return (
    <Container>
      {!isAuthenticated ? (
        <>
          <SectionHeading>Join us</SectionHeading>
          <SubHeading>Join our Tech Community</SubHeading>
          <Description>
            <Div>
              <CtaSection>
                <HeadingLine>
                  At PathFinder, we're more than just a platform
                </HeadingLine>
                <P>
                  Simply sign up for an account and start exploring the world of
                  tech and keep your progress. We can't wait to welcome you and
                  embark on this exciting journey together.
                </P>
                <Button size="huge" onClick={() => navigate("/signup")}>
                  Join us now
                </Button>
                <P>Try our psychometric assessment now</P>
                <Modal>
                  <Modal.Open opens="assessment">
                    <Button size="huge">Take assessment</Button>
                  </Modal.Open>
                  <Modal.Window name="assessment">
                    <AssessmentModal />
                  </Modal.Window>
                </Modal>
              </CtaSection>
            </Div>
          </Description>
        </>
      ) : (
        <>
          <SectionHeading>Continue learning</SectionHeading>
          <SubHeading>Keep on exploring roadmaps</SubHeading>
          <Description>
            <Div>
              <CtaSection>
                <HeadingLine>
                  At PathFinder, we're more than just a platform
                </HeadingLine>
                <P>
                  Continue exploring roadmaps and keep track of your progress
                </P>
                <Button size="huge" onClick={() => navigate("/dashboard")}>
                  Go to Dashboard
                </Button>
                <P>Try our psychometric assessment now</P>
                <Modal>
                  <Modal.Open opens="assessment">
                    <Button size="huge">Take assessment</Button>
                  </Modal.Open>
                  <Modal.Window name="assessment">
                    <AssessmentModal />
                  </Modal.Window>
                </Modal>
              </CtaSection>
            </Div>
          </Description>
        </>
      )}
    </Container>
  );
}

export default JoinCommunity;
