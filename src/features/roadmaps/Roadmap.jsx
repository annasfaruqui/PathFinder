import { useParams } from "react-router-dom";

import Row from "../../ui/Row";
import SectionHeading from "../../ui/SectionHeading";
import Heading from "../../ui/Heading";
import Timeline from "./Timeline";

import { capitalizeFirstLetterEveryWord } from "../../utils/capitalizer";

import { frontendRoadmap } from "../../data/data-frontend";
import { backendRoadmap } from "../../data/data-backend";
import { devopsRoadmap } from "../../data/data-devops";
import { softwareArchitectureRoadmap } from "../../data/data-softwareArchitecture";
import { uiuxDesigningRoadmap } from "../../data/data-uiuxDesigning";
import GoBackButton from "../../ui/GoBackButton";

function Roadmap() {
  const { roadmap } = useParams();

  let renderRoadmap;

  if (roadmap === "frontend-development") renderRoadmap = frontendRoadmap;
  if (roadmap === "backend-development") renderRoadmap = backendRoadmap;
  if (roadmap === "devops") renderRoadmap = devopsRoadmap;
  if (roadmap === "software-architecture")
    renderRoadmap = softwareArchitectureRoadmap;
  if (roadmap === "ui-ux-designing") renderRoadmap = uiuxDesigningRoadmap;

  const title = capitalizeFirstLetterEveryWord(`${roadmap}`);

  return (
    <>
      <Row>
        <Row type="horizontal">
          <SectionHeading>
            Roadmaps &nbsp;
            <span style={{ color: "var(--color-grey-700)" }}>
              &gt;
            </span> &nbsp; {title}
          </SectionHeading>
          <GoBackButton />
        </Row>
        <Heading as="h1">{title} Roadmap</Heading>
      </Row>
      <Timeline renderRoadmap={renderRoadmap} roadmapUrl={roadmap} />
    </>
  );
}

export default Roadmap;
