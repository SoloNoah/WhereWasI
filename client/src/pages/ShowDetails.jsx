import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FullPage from '../components/FullPage/FullPage';
import ShowMainDescriptionCont from '../components/Containers/ShowMainDescriptionCont';

const ShowDetails = ({ show, episodesArray }) => {
  

  useEffect(() => {}, []);
  return (
    <FullPage>
      {show && (
        <>
          <ShowMainDescriptionCont show={show} />
        </>
      )}
    </FullPage>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.selectedShowReducer.show,
  };
};
export default connect(mapStateToProps, null)(ShowDetails);
