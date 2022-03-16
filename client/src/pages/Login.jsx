import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, Button } from '@mui/material';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
  };
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
    <div className='full-page form-page'>
      <div className='form'>
        <span className='form-header'>
          <h1>Login</h1>
          <h4>Helping you binge with ease</h4>
        </span>

        <FormControl>
          <InputLabel htmlFor={'email'}>Email</InputLabel>
          <Input id={'email'} required={true} className='input' onChange={(e) => setEmail.setTop(e.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel className='inputLabel' htmlFor={'password'}>
            Password
          </InputLabel>
          <Input id={'password'} required={true} className='input' type='password' onChange={(e) => setPassword.setBottom(e.target.value)} />
        </FormControl>
        <Button variant='contained' color='primary' type='submit' onClick={handleSubmit} className='submit'>
          Submit
        </Button>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <p className='form-link'>Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
