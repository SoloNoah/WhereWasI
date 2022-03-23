import React from "react";
import Subtitle from "../Labels/Subtitle";
const DescriptionCont = ({ img, text }) => {
  return (
    <div>
      <img className="" src={img} alt="" />
      <Subtitle subtitle={text} />
    </div>
  );
};

export default DescriptionCont;
