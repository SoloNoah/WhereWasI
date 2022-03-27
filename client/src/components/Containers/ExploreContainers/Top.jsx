import React, { useEffect } from "react";
import { connect } from "react-redux";

import CardsContainer from "../CardsContainer";
import { getTopRated } from "../../../store/actions/exploreAction";

const Top = ({ topList, getTopRated }) => {
  useEffect(() => {
    getTopRated();
  }, []);
  return (
    <>
      <div>Top</div>
      {topList && <CardsContainer list={topList} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    topList: state.exploreReducer.topList,
  };
};

const mapDispatchToProps = {
  getTopRated,
};
export default connect(mapStateToProps, mapDispatchToProps)(Top);
