import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../components/Form/Form';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const onClick = async () => {
    const newUser = { email, password };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      navigate('/login');

      // const body = JSON.stringify(newUser);
      // const res = await axios.post("/api/users/", body, config);
      // if (res.status === 200) {
      //   window.localStorage.setItem("accessToken", res.data.token);
      //   // history.replace("/login");
      //   navigate('/login');

      //   return;
      // }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className='full-page'>
      <Form
        setTop={setEmail}
        setBottom={setPassword}
        botType={'password'}
        onClick={onClick}
        inputTop={'Email'}
        inputBot={'Password'}
        title={'Register'}
        subTitle={'Join and start binging'}
        next={'login'}
      />
    </div>
  );
};

export default Register;
