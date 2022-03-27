import React, { useEffect } from "react";
import { connect } from "react-redux";

import CardsContainer from "../CardsContainer";
import { getTopRated } from "../../../store/actions/exploreAction";

const Top = ({ topList, getTopRated }) => {
  useEffect(() => {
    if (!topList) {
      getTopRated();
    }
  }, []);
  return (
    <>
      <div>Top</div>
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
  getTopRated,
};
export default connect(mapStateToProps, mapDispatchToProps)(Top);
