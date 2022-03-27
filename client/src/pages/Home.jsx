import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import HomepageBanner from "../components/Card/HomepageBanner";
import FullPage from "../components/FullPage/FullPage";
import DesciptionsWrapper from "../components/Containers/DesciptionsWrapper";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const transferToLogin = () => {
    navigate("/login");
  };
  return (
    <FullPage>
      {!isAuthenticated && (
        <>
          <HomepageBanner
            title="Where was I?"
            subtitle="Keep track of the series you've watched lately with ease."
            func={transferToLogin}
          />
          <DesciptionsWrapper />
        </>
      )}
      {isAuthenticated}
    </FullPage>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Home);
