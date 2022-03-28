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
const ShowCard = ({ show }) => {
  const { mal_id, title, images, synopsis } = show;
  const image_url = images.jpg.image_url;
  return (
    <CardWrapper>
      <DescriptionCont img={image_url} text={synopsis} title={title} />
    </CardWrapper>
  );
};

export default ShowCard;
