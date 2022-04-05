import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

import CardsContainer from '../CardsContainer';
import { getTopRated } from '../../../store/actions/exploreAction';

const Top = ({ topList, getTopRated, failErrorMessage }) => {
  const [userprofile, setProfile] = useOutletContext();
  useEffect(() => {
    getTopRated(userprofile?.series);
  }, []);

  /**
   * failerror message here indicates that the api request from jikan failed
   * need to put it in its own component
   */

  return (
    <>
      <div>Top</div>
      {topList && failErrorMessage === '' && <CardsContainer list={topList} />}
      {failErrorMessage && <h1>{{ failErrorMessage }}</h1>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    topList: state.exploreReducer.topList,
    failErrorMessage: state.exploreReducer.failErrorMessage,
  };
};

const mapDispatchToProps = {
  getTopRated,
};
export default connect(mapStateToProps, mapDispatchToProps)(Top);
