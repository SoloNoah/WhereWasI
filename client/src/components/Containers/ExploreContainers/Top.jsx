import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import CardsContainer from "../CardsContainer";
import { getTopRated } from "../../../store/actions/exploreAction";
import { getProfile } from "../../../store/actions/profileAction";

const Top = ({
  topList,
  getTopRated,
  failErrorMessage,
  isAuthenticated,
  profile,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && (profile === null || profile === undefined)) {
      dispatch(getProfile());
    }
    if (topList.length === 0) getTopRated();
  }, []);

  /**
   * Dont need this because i won't be showing followed shows on the card anyway
   */
  useEffect(() => {
    if (profile && topList.length === 0) {
      getTopRated(profile?.series);
    }
  }, [profile]);

  /**
   * failerror message here indicates that the api request from jikan failed
   * need to put it in its own component
   */

  return (
    <>
      {topList && failErrorMessage === "" && <CardsContainer list={topList} />}
      {failErrorMessage && <h1>{{ failErrorMessage }}</h1>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    topList: state.exploreReducer.topList,
    profile: state.profileReducer.profile,
    failErrorMessage: state.exploreReducer.failErrorMessage,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  getTopRated,
};
export default connect(mapStateToProps, mapDispatchToProps)(Top);
