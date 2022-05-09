import React from "react";
import styled from "styled-components";

const ShowDescpriptionWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  margin: 0 auto;
  width: 70%;
  border: 1px solid white;
  padding: 20px;
  border-radius: 5px;
  margin-top: 50px;
  height: auto;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;
const GeneralContainer = (props) => {
  let renderContainer = (
    <ShowDescpriptionWrapper>{props.children}</ShowDescpriptionWrapper>
  );
  if (props.col) {
    renderContainer = (
      <ShowDescpriptionWrapper col>{props.children}</ShowDescpriptionWrapper>
    );
  }
  return renderContainer;
};

export default GeneralContainer;
