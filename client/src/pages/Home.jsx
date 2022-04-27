import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomepageBanner from '../components/Card/HomepageBanner';
import FullPage from '../components/FullPage/FullPage';
import DesciptionsWrapper from '../components/Containers/DesciptionsWrapper';

const Home = () => {
  const navigate = useNavigate();

  const transferToLogin = () => {
    navigate('/login');
  };
  return (
    <FullPage>
      <>
        <HomepageBanner title='Where was I?' subtitle="Keep track of the series you've watched lately with ease." func={transferToLogin} />
        <DesciptionsWrapper />
      </>
    </FullPage>
  );
};

export default Home;
