import React from "react";
import styled from "styled-components";

const Wrapper = styled.img`
  width: 50px;
  height: 30px;
`;
const ImageContainer = ({ src }) => {
  return <Wrapper src={src} />;
};

export default ImageContainer;
