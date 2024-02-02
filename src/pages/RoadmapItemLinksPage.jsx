import { useParams } from "react-router-dom";

import ItemLinks from "../features/roadmaps/ItemLinks";
import Row from "../ui/Row";
import SectionHeading from "../ui/SectionHeading";
import Heading from "../ui/Heading";

import { useScrollToTop } from "../hooks/useScrollToTop";

import { capitalizeFirstLetterEveryWord } from "../utils/capitalizer";
import GoBackButton from "../ui/GoBackButton";

function RoadmapItemLinksPage() {
  const { roadmap, roadmapItem } = useParams();
  useScrollToTop(); //NOT working (inspect later)(NOT working on any of the pages inside AppLayout)

  const title = capitalizeFirstLetterEveryWord(`${roadmap}`);
  const subTitle = capitalizeFirstLetterEveryWord(`${roadmapItem}`);

  return (
    <>
      <Row>
        <Row type="horizontal">
          <SectionHeading>
            Roadmaps &nbsp;
            <span style={{ color: "var(--color-grey-700)" }}>&gt;</span>
            &nbsp; {title} &nbsp;
            <span style={{ color: "var(--color-grey-700)" }}>
              &gt;
            </span> &nbsp; {subTitle}
          </SectionHeading>
          <GoBackButton />
        </Row>
        <Heading as="h1">{subTitle}</Heading>
      </Row>

      <ItemLinks roadmap={roadmap} subCategory={roadmapItem} />
    </>
  );
}

export default RoadmapItemLinksPage;
