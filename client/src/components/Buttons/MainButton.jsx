import React from "react";
import { Button } from "@mui/material";

const MainButton = ({ func, classValue, textValue, style }) => {
  return (
    <Button
      style={style}
      variant="contained"
      onClick={func}
      className={classValue}
    >
      {textValue}
    </Button>
  );
};

export default MainButton;
