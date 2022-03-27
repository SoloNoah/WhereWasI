import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardsContainer from "../CardsContainer";
import { getTodaySchedule } from "../../../store/actions/exploreAction";

const Today = ({ todayList, getTodaySchedule }) => {
  useEffect(() => {
    getTodaySchedule();
  }, []);

  return (
    <>
      <div>Today</div>
      <CardsContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todayList: state.exploreReducer.todayList,
  };
};

const mapDispatchToProps = {
  getTodaySchedule,
};
export default connect(mapStateToProps, mapDispatchToProps)(Today);
