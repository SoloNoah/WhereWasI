import React from "react";

const FullPage = (props) => {
  return <div className="full-page flex-col">{props.children}</div>;
};

export default FullPage;
