import React from 'react';
import styled from 'styled-components';
import ShowCard from './ShowCard';

const CardsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardsContainer = ({ list }) => {
  const listItems = list.map((d) => <ShowCard key={d.mal_id} show={d}></ShowCard>);

  return <CardsWrapper>{listItems}</CardsWrapper>;
};

export default CardsContainer;
