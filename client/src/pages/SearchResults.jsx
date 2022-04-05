import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../components/Containers/CardsContainer';
import FullPage from '../components/FullPage/FullPage';

const SearchResults = ({ searchResponseList, failErrorMessage }) => {
  useEffect(() => {
    console.log(searchResponseList);
  }, []);
  return <FullPage>{searchResponseList && <CardsContainer list={searchResponseList} />}</FullPage>;
};

const mapStateToProps = (state) => {
  return {
    searchResponseList: state.exploreReducer.searchResponseList,
    failErrorMessage: state.exploreReducer.failErrorMessage,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
