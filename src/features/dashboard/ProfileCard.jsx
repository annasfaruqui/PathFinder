import styled from "styled-components";

import Heading from "../../ui/Heading";

import { useUser } from "../authentication/useUser";

const Card = styled.div`
  grid-column: 3 / span 2;

  padding: 1rem 2rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-lg);

  display: grid;
  grid-template-columns: 1fr 18rem;
  column-gap: 1.6rem;
`;

const Detail = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;

  & span {
    font-weight: 500;
  }
`;

const Img = styled.img`
  margin-top: 1rem;
  grid-column: 2/-1;
  border-radius: 50%;
`;

function ProfileCard() {
  const { user } = useUser();
  const { fullName, qualification, avatar } = user.user_metadata;

  return (
    <Card>
      <div>
        <Heading as="h4">Profile</Heading>
        <Detail>
          Name: <br />
          <span>{fullName}</span>
        </Detail>
        <Detail>
          Qualification:
          <br />
          <span>{qualification}</span>
        </Detail>
      </div>
      <Img src={avatar || "default-user-profileCard.jpg"} alt={fullName} />
    </Card>
  );
}

export default ProfileCard;
