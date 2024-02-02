import styled from "styled-components";

import Title from "../../ui/Title";
import SectionHeading from "../../ui/SectionHeading";

import { articles } from "../../data/data-articles";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Intro = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ArticlesList = styled.ul`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ArticleItem = styled.li`
  width: 100rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  border: 1px solid var(--color-grey-200);
`;

const Img = styled.img`
  width: 100%;
`;

const Content = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Domain = styled.p`
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 2px 1rem;
  border-radius: var(--border-radius-xl);
  background-color: var(--color-brand-100);
  color: var(--color-grey-500);
`;

const ArticleTitle = styled.h3`
  font-size: 2.8rem;
`;

const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-400);
`;

const Description = styled.p`
  font-size: 1.8rem;
`;

const SrcLink = styled.p`
  font-weight: 500;
  color: var(--color-grey-600);

  & a {
    color: blue;
    text-decoration: underline;
    word-break: break-all;
  }
`;

function Article({ article }) {
  return (
    <ArticleItem>
      <Img src={article.image} alt={article.title} />
      <Content>
        <Domain>{article.domain}</Domain>
        <ArticleTitle>{article.title}</ArticleTitle>
        {article.date !== "" && <Date>{article.date}</Date>}
        <Description>{article.description}</Description>
        <SrcLink>
          Read more at:{" "}
          <a href={article.link} target="_blank" rel="noreferrer">
            {article.link}
          </a>
        </SrcLink>
      </Content>
    </ArticleItem>
  );
}

function Articles() {
  return (
    <ArticlesContainer>
      <Title>Explore our Latest Articles</Title>

      <Intro>
        Stay updated with the latest insights, tutorials, and tech news. Our
        articles cover a wide range of topics, from programming languages to
        best practices in software development. Dive into our knowledge base and
        expand your expertise.
      </Intro>

      <SectionHeading>Featured Articles</SectionHeading>
      <Title>
        Delve into the World of Technology: Featured Articles and In-Depth
        Insights
      </Title>

      <ArticlesList>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticlesList>
    </ArticlesContainer>
  );
}

export default Articles;
