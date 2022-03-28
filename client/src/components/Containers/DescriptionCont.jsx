import React from 'react';
import styled from 'styled-components';

import Subtitle from '../Labels/Subtitle';
import ImageContainer from './ImageContainer';
import MainTitle from '../Labels/MainTitle';

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 1 40%;
  margin: 0 auto;
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const DescriptionCont = ({ img, text, title }) => {
  return (
    <DescriptionWrapper>
      <ImageContainer src={img} />
      {title && <MainTitle title={title} />}
      {text && <Subtitle subtitle={text} />}
    </DescriptionWrapper>
  );
};

export default DescriptionCont;
