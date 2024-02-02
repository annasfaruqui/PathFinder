import styled from "styled-components";

import Welcome from "./Welcome";
import ProfileCard from "./ProfileCard";
import ProgressSummary from "./ProgressSummary";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Welcome />
      <ProfileCard />
      <ProgressSummary />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
