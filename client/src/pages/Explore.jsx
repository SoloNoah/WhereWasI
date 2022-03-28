import React, { useState, useEffect } from 'react';

import SubNav from '../components/Navbar/SubNav';
import FullPage from '../components/FullPage/FullPage';
import { Outlet, useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('top');
  }, []);
  return (
    <FullPage>
      <SubNav />
      <Outlet />
    </FullPage>
  );
};

export default Explore;
