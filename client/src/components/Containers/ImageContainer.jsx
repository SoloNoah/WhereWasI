import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.img`
  width: 100px;
  height: 100px;
`;
const ImageContainer = ({ src }) => {
  return <ImageWrapper src={src} />;
};

export default ImageContainer;
