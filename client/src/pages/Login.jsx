import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form/Form';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      props.setLoggedin(true);
    }
  }, []);
  const onClick = async () => {
    const newUser = { email, password };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newUser);
      navigate('/');
      // const res = await axios.post('/api/auth', body, config);
      // if (res.status === 200) {
      //   props.setLoggedin(true);
      //   window.localStorage.setItem('accessToken', res.data.token);
      //   navigate('/');
      //   return;
      // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='full-page'>
      <Form
        setTop={setEmail}
        setBottom={setPassword}
        onClick={onClick}
        botType={'password'}
        inputTop={'Email'}
        inputBot={'Password'}
        title={'Login'}
        subTitle={'Helping you binge with ease'}
        next={'register'}
      />
    </div>
  );
};

export default Login;
