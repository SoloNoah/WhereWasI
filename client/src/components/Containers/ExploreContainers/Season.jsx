import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CardsContainer from "../CardsContainer";
import { getSeasonalAnime } from "../../../store/actions/exploreAction";

const Season = ({ seasonList, getSeasonalAnime }) => {
  useEffect(() => {
    getSeasonalAnime();
  }, []);

  return (
    <>
      <div>Season</div>
      <CardsContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    seasonList: state.exploreReducer.seasonList,
  };
};

const mapDispatchToProps = {
  getSeasonalAnime,
};
export default connect(mapStateToProps, mapDispatchToProps)(Season);
