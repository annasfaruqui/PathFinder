import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function DashboardPage() {
  return (
    <>
      <Row>
        <Heading as="h1">Dashboard</Heading>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default DashboardPage;
