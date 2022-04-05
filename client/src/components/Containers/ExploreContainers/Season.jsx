import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import CardsContainer from '../CardsContainer';
import { getSeasonalAnime } from '../../../store/actions/exploreAction';
import { getProfile } from '../../../store/actions/profileAction';

const Season = ({ seasonList, getSeasonalAnime, failErrorMessage, isAuthenticated, profile }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getSeasonalAnime(userprofile?.series);
  // }, []);

  useEffect(() => {
    if (isAuthenticated && (profile === null || profile === undefined)) {
      dispatch(getProfile());
    }
  }, []);

  useEffect(() => {
    if (profile) {
      getSeasonalAnime(profile?.series);
    }
  }, [profile]);
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
    profile: state.profileReducer.profile,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  getSeasonalAnime,
};
export default connect(mapStateToProps, mapDispatchToProps)(Season);
