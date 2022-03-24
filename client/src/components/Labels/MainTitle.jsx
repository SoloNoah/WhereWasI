import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 0;

  @media only screen and (max-width: 1280px) {
    font-size: 1.4em;
  }
`;

const MainTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default MainTitle;
