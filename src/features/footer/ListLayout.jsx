import styled from "styled-components";

const ListLayout = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3.5rem;

  & ul {
    color: #9ca3af;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    & li {
      cursor: pointer;

      &:hover {
        color: #f3f4f6;
      }
    }
  }
`;

export default ListLayout;
