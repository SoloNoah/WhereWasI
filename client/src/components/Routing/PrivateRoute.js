import React from "react";
import { connect } from "react-redux";
import { useNavigate, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
