import React from "react";
import styled from "styled-components";

import MainButton from "../Buttons/MainButton";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-size: 45px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 30px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

const Wrapper = styled.div`
  height: 200px;
  width: 70%;
  padding: 30px 20px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const style = {
  padding: "18px 36px",
  fontSize: "18px",
  width: "70%",
  color: "blue",
  backgroundColor: "white",
  margin: "0 auto",
};
const Card = ({ title, subtitle, func }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <MainButton
        func={func}
        classValue={"home-btn"}
        textValue={"Join for free!"}
        style={style}
      />
    </Wrapper>
  );
};

export default Card;
