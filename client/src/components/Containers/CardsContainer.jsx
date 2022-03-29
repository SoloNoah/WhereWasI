import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ShowCard from './ShowCard';

import { addSeries } from '../../store/actions/profileAction';

const CardsWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
 margin: 0 auto;
 @media (max-width: 1280px) {
   flex-direction: column;
   gap: 20px;
}
  }
`;

const CardsContainer = ({ list, addSeries }) => {
  const toggleCardStatus = (id, episodesNum) => {
    console.log(id, episodesNum);
    addSeries(id, episodesNum);
  };
  const listItems = list.map((d) => <ShowCard key={d.mal_id} show={d} handleClick={toggleCardStatus}></ShowCard>);

  return <CardsWrapper>{listItems}</CardsWrapper>;
};

const mapDispatchToProps = {
  addSeries,
};

export default connect(null, mapDispatchToProps)(CardsContainer);
