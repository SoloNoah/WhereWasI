import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: ${(props) => (props.custom ? `${props.custom}px` : "30px")};
  font-weight: bold;
  margin-bottom: 10px;

  @media only screen and (max-width: 1280px) {
    font-size: 1.4em;
  }
`;

const MainTitle = ({ title, custom }) => {
  console.log(custom);
  let titleRender = <Title>{title}</Title>;
  if (custom) {
    titleRender = <Title custom={custom}>{title}</Title>;
  }
  return titleRender;
};

export default MainTitle;
