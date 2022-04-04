import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../CardsContainer';
import { getSeasonalAnime } from '../../../store/actions/exploreAction';

const Season = ({ seasonList, getSeasonalAnime, failErrorMessage }) => {
  useEffect(() => {
    getSeasonalAnime();
  }, []);

  return (
    <>
      {seasonList && failErrorMessage === '' && <CardsContainer list={seasonList} />}
      {failErrorMessage && <h1>{{ failErrorMessage }}</h1>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    seasonList: state.exploreReducer.seasonList,
    failErrorMessage: state.exploreReducer.failErrorMessage,
  };
};

const mapDispatchToProps = {
  getSeasonalAnime,
};
export default connect(mapStateToProps, mapDispatchToProps)(Season);
