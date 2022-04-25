import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../store/actions/profileAction';

import CardsContainer from '../components/Containers/CardsContainer';
import FullPage from '../components/FullPage/FullPage';

const Profile = ({ getProfile, userProfile }) => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userProfile) {
      const userSeries = userProfile.series;
      setSeries(userSeries);
    }
  }, [userProfile]);

  return <FullPage>{series.length > 0 && <CardsContainer list={series} />}</FullPage>;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profileReducer.profile,
  };
};
const mapDispatchToProps = {
  getProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
