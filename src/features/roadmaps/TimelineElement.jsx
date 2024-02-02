import { useState } from "react";
import styled from "styled-components";

import { VerticalTimelineElement } from "react-vertical-timeline-component";

import { HiOutlineChevronDown } from "react-icons/hi2";

import ButtonGroup from "../../ui/ButtonGroup";
import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";

// const Tag = styled.div`
//   display: inline;
//   padding: 1rem 2rem;
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-xxl);
//   background-color: var(--color-brand-700);
//   color: #fff;
// `;

const ItemContent = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;

  & h2 {
    font-size: 3rem;
    font-weight: 800;
    color: inherit;
  }

  & p {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.4;
  }
`;

function TimelineElement({ item, roadmapUrl, position }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <VerticalTimelineElement
      position={position}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "var(--color-grey-100)",
        color: "var(--color-grey-700)",
        border: `3px solid ${
          !isCompleted ? "var(--color-grey-100)" : "#00b300"
        }`,
        borderBottom: `10px solid ${
          !isCompleted ? "var(--color-grey-100)" : "#00b300"
        }`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${
          !isCompleted ? "rgb(33, 150, 243)" : "#00b300"
        }`,
      }}
      //   date={<Tag>advanced</Tag>}
      iconStyle={{
        background: `${!isCompleted ? "rgb(33, 150, 243)" : "#00b300"}`,
        color: `${!isCompleted ? "#d1d5db" : "#555"}`,
      }}
      icon={<HiOutlineChevronDown />}
    >
      <ItemContent>
        <div>
          <h2>{item.heading}</h2>
          <p>{item.content}</p>
        </div>
        <ButtonGroup>
          <ButtonLink
            to={`/roadmaps/${roadmapUrl}/${item.heading
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            More info &nbsp; &rarr;
          </ButtonLink>
          <Button
            variation={!isCompleted ? "secondary" : "danger"}
            onClick={() => setIsCompleted((state) => !state)}
          >
            {!isCompleted ? "Mark as completed" : "Mark as incomplete"}
          </Button>
        </ButtonGroup>
      </ItemContent>
    </VerticalTimelineElement>
  );
}

export default TimelineElement;
