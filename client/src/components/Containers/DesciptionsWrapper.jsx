import React from "react";
import styled from "styled-components";

import DescriptionCont from "./DescriptionCont";
import Calander from "../../assets/calander.png";
import Track from "../../assets/track.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  margin-top: 50px;
  padding: 20px 50px;
  margin-bottom: 50px;
`;
const DesciptionsWrapper = () => {
  const calanderText =
    "You don't need to remember which episode of what show you've already watched.Track every show you've watched and monitor easily.";
  const trackText =
    "Add new series, update old ones and delete those you've already finished.";
  return (
    <Wrapper>
      <DescriptionCont img={Calander} text={calanderText} />
      <DescriptionCont img={Track} text={trackText} />
    </Wrapper>
  );
};

export default DesciptionsWrapper;
