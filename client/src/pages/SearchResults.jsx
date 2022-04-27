import React from 'react';
import { connect } from 'react-redux';

import CardsContainer from '../components/Containers/CardsContainer';
import FullPage from '../components/FullPage/FullPage';

const SearchResults = ({ searchResponseList, failErrorMessage }) => {
  let render = null;
  if (searchResponseList.length === 0) {
    render = (
      <FullPage>
        <h1>No results</h1>
      </FullPage>
    );
  } else {
    render = <FullPage>{searchResponseList.length > 0 && <CardsContainer list={searchResponseList} />}</FullPage>;
  }

  return render;
};

const mapStateToProps = (state) => {
  return {
    searchResponseList: state.exploreReducer.searchResponseList,
    failErrorMessage: state.exploreReducer.failErrorMessage,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
