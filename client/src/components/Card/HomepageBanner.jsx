import React from "react";
import styled from "styled-components";

import MainButton from "../Buttons/MainButton";
import MainTitle from "../Labels/MainTitle";
import Subtitle from "../Labels/Subtitle";

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
const HomepageBanner = ({ title, subtitle, func }) => {
  return (
    <Wrapper>
      <MainTitle title={title} />
      <Subtitle subtitle={subtitle} lg />
      <MainButton
        func={func}
        classValue={"home-btn"}
        textValue={"Join for free!"}
        style={style}
      />
    </Wrapper>
  );
};

export default HomepageBanner;
