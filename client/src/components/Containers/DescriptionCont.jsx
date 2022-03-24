import React from "react";
import styled from "styled-components";

import Subtitle from "../Labels/Subtitle";
import ImageContainer from "./ImageContainer";

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const DescriptionCont = ({ img, text }) => {
  return (
    <DescriptionWrapper>
      <ImageContainer src={img} />
      <Subtitle subtitle={text} />
    </DescriptionWrapper>
  );
};

export default DescriptionCont;
