import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Card from "../components/Card/Card";
import FullPage from "../components/FullPage/FullPage";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const transferToLogin = () => {
    console.log("navigate to login");
    navigate("/login");
  };
  return (
    <FullPage>
      {!isAuthenticated && (
        <Card
          title="Where was I?"
          subtitle="Keep track of the series you've watched lately with ease."
          func={transferToLogin}
        />
      )}
    </FullPage>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Home);
