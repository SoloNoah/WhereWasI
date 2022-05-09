import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import DescriptionCont from "./DescriptionCont";
import MainButton from "../Buttons/MainButton";

const CardWrapper = styled.div`
  flex: 0 1 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  border: 2px solid #5896E1;
  border-radius: 10px;
  padding: 15px;
  
  @media (max-width: 1280px) {
    padding: 15px 30px;
    margin: 30px 0;
 }
  }
`;
const style = {
  padding: "9px 18px",
  fontSize: "15px",
  color: "#093263",
  backgroundColor: "white",
};
const ShowCard = ({ show }) => {
  const { mal_id, title, synopsis } = show;
  const navigate = useNavigate();

  const image_url = show.images ? show.images.jpg.image_url : show.image_url;

  const navigateToShowDetails = () => {
    navigate("/show/" + mal_id, { state: show });
  };
  return (
    <CardWrapper>
      <DescriptionCont img={image_url} text={synopsis} title={title} />
      <MainButton
        func={navigateToShowDetails}
        classValue={"home-btn"}
        textValue={"View more"}
        style={style}
      />
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(ShowCard);
