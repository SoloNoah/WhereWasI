import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: ${(props) => (props.lg ? '150px' : '100px')};
  height: ${(props) => (props.lg ? '150px' : '100px')};
`;
const ImageContainer = ({ src, lg }) => {
  if (lg) {
    return <ImageWrapper lg src={src} />;
  }
  return <ImageWrapper src={src} />;
};

export default ImageContainer;
