import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: ${(props) => (props.desc ? "25%" : "100px")};
  height: ${(props) => (props.desc ? "350px" : "100px")};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 1280px) {
    width: ${(props) => (props.desc ? "100%" : "100px")};
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageContainer = ({ src, desc }) => {
  let renderImage = (
    <ImageDiv>
      <ImageWrapper src={src} />
    </ImageDiv>
  );
  if (desc) {
    renderImage = (
      <ImageDiv desc>
        <ImageWrapper src={src} />
      </ImageDiv>
    );
  }

  return renderImage;
};

export default ImageContainer;
