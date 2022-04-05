import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import SubNav from '../components/Navbar/SubNav';
import FullPage from '../components/FullPage/FullPage';
import { getProfile, userprofile } from '../store/actions/profileAction';

import SearchWrapper from '../components/Search/SearchWrapper';

const Explore = ({ profile, isAuthenticated }) => {
  const [userprofile, setProfile] = useState(profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && (userprofile === null || userprofile === undefined)) {
      dispatch(getProfile());
    }
    navigate('top');
  }, []);
  return (
    <FullPage>
      <SubNav />
      <SearchWrapper />
      <Outlet context={[userprofile, setProfile]} />
    </FullPage>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Explore);
