import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import SubNav from '../components/Navbar/SubNav';
import FullPage from '../components/FullPage/FullPage';

import SearchWrapper from '../components/Search/SearchWrapper';

const Explore = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('top');
  }, []);
  return (
    <FullPage>
      <SubNav />
      <SearchWrapper />
      <Outlet />
    </FullPage>
  );
};

export default Explore;
