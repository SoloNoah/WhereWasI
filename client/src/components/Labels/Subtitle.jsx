import React from "react";
import styled from "styled-components";

const SubTitle = styled.p`
  font-size: ${(lg) => (lg ? "20px" : "55px")};
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Subtitle = ({ subtitle }) => {
  return <SubTitle>{subtitle}</SubTitle>;
};

export default Subtitle;
