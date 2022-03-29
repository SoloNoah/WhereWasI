import React from 'react';
import styled from 'styled-components';

import DescriptionCont from './DescriptionCont';

const CardWrapper = styled.div`
  flex: 0 1 30%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    padding: 0 30px;
    margin: 30px 0;
 }
  }
`;
const ShowCard = ({ show, handleClick }) => {
  const { mal_id, title, images, synopsis, episodes } = show;
  const clicked = true; //TODO SEND FROM BACKEND THE DATA IF THE SHOW HAS BEEN WATCHED OR NOT SO I KNOW WHATS THE STATE AND CHANGE IT ON CLICK. FOR NOW I'M HARD CODING ADD SERIES/REMOVE SERIES FOR TESTING THE FUNCTIONALITY
  const image_url = images.jpg.image_url;
  const toggleCardStatus = () => {
    handleClick(mal_id, episodes);
  };
  return (
    <CardWrapper>
      <DescriptionCont img={image_url} text={synopsis} title={title} />
      <button onClick={toggleCardStatus}>Add</button>
    </CardWrapper>
  );
};

export default ShowCard;
