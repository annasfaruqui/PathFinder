import styled from "styled-components";

import Articles from "../features/articles/Articles";

import { useScrollToTop } from "../hooks/useScrollToTop";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function ArticlesPage() {
  useScrollToTop();

  return (
    <Container>
      <Articles />
    </Container>
  );
}

export default ArticlesPage;
