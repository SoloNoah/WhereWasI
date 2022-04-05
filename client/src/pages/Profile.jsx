import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getProfile } from '../store/actions/profileAction';

import FullPage from '../components/FullPage/FullPage';

const Profile = ({ getProfile, userProfile }) => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userProfile) {
      console.log('updated');
      console.log(userProfile.series);
    }
  }, [userProfile]);

  return <FullPage />;
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
