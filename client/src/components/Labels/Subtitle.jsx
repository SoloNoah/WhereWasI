import React from "react";
import styled from "styled-components";

const SubTitle = styled.p`
  font-size: ${(props) => (props.lg ? "25px" : "20px")};
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Subtitle = ({ subtitle, lg }) => {
  console.log(lg);
  if (lg) {
    return <SubTitle lg>{subtitle}</SubTitle>;
  }
  return <SubTitle>{subtitle}</SubTitle>;
};

export default Subtitle;
