import styled from "styled-components";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaFlagCheckered } from "react-icons/fa";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import TimelineElement from "./TimelineElement";

const TimelineDiv = styled.div`
  border: 3px solid var(--color-brand-200);
  border-radius: var(--border-radius-xl);
  background-color: var(--color-grey-0);
`;

function Timeline({ renderRoadmap, roadmapUrl }) {
  return (
    <div>
      <TimelineDiv>
        <VerticalTimeline lineColor="var(--color-grey-500)">
          <VerticalTimelineElement
            iconStyle={{
              background: "var(--color-brand-500)",
              color: "#d1d5db",
            }}
            icon={<HiOutlineChevronDoubleDown />}
          />
          <div>
            {renderRoadmap.map((item, id) => (
              <TimelineElement
                item={item}
                key={id}
                roadmapUrl={roadmapUrl}
                position={id % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaFlagCheckered />}
          />
        </VerticalTimeline>
      </TimelineDiv>
    </div>
  );
}

export default Timeline;
