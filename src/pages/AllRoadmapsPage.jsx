import FlipCards from "../features/roadmaps/FlipCards";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AllRoadmapsPage() {
  return (
    <>
      <Row>
        <Heading as="h1">All Roadmaps</Heading>
      </Row>

      <FlipCards />
    </>
  );
}

export default AllRoadmapsPage;
