import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import HomepageBanner from "../components/Card/HomepageBanner";
import FullPage from "../components/FullPage/FullPage";
import DesciptionsWrapper from "../components/Containers/DesciptionsWrapper";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const transferToLogin = () => {
    console.log("navigate to login");
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
      {/*
        TODO: create search component + send request to api and get results
        create results component.
        add show to profile (look at profile repository in backend to see the TODO i've written there.)
      
      */}
      {isAuthenticated && true}
    </FullPage>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Home);
