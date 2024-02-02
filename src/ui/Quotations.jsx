import styled from "styled-components";

import { quotes } from "../data/data-quotes";

const StyledQuotation = styled.div`
  background-color: var(--color-brand-100);

  border-radius: var(--border-radius-sm);
  padding: 2rem 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Quote = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: -0.8px;
  align-self: end;
`;

function Quotations() {
  return (
    <>
      {quotes.map((quote) => (
        <Quotation key={quote.id} quote={quote} />
      ))}
    </>
  );
}

function Quotation({ quote }) {
  return (
    <StyledQuotation>
      <Quote>"{quote.quote}"</Quote>
      <Author>
        &mdash;{quote.author}, ({quote.profession})
      </Author>
    </StyledQuotation>
  );
}

export default Quotations;
