import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardsContainer from '../CardsContainer';
import { getTodaySchedule } from '../../../store/actions/exploreAction';

const Today = ({ todayList, getTodaySchedule, failErrorMessage }) => {
  useEffect(() => {
    getTodaySchedule();
  }, []);

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
  };
};

const mapDispatchToProps = {
  getTodaySchedule,
};
export default connect(mapStateToProps, mapDispatchToProps)(Today);
