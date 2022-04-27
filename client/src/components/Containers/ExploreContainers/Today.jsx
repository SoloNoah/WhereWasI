import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import CardsContainer from '../CardsContainer';
import { getTodaySchedule } from '../../../store/actions/exploreAction';
import { getProfile } from '../../../store/actions/profileAction';

const Today = ({ todayList, getTodaySchedule, failErrorMessage, isAuthenticated, profile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && (profile === null || profile === undefined)) {
      dispatch(getProfile());
    }
    if (todayList.length === 0) getTodaySchedule();

  }, []);

  useEffect(() => {
    if (profile && todayList.length === 0) {
      getTodaySchedule(profile?.series);
    }
  }, [profile]);
  return (
    <>
      <div>Today</div>
      {todayList && failErrorMessage === '' && <CardsContainer list={todayList} />}
      {failErrorMessage && <h1>{{ failErrorMessage }}</h1>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todayList: state.exploreReducer.todayList,
    failErrorMessage: state.exploreReducer.failErrorMessage,
    profile: state.profileReducer.profile,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  getTodaySchedule,
};
export default connect(mapStateToProps, mapDispatchToProps)(Today);
