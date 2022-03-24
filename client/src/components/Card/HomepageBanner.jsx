import React from "react";
import styled from "styled-components";

import MainButton from "../Buttons/MainButton";
import MainTitle from "../Labels/MainTitle";
import Subtitle from "../Labels/Subtitle";

const Wrapper = styled.div`
  min-height: 200px;
  width: 650px;
  padding: 30px 0px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1280px) {
    width: 70%;
  }
`;

const style = {
  padding: "18px 36px",
  fontSize: "18px",
  color: "#093263",
  backgroundColor: "white",
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
