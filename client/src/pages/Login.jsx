import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import formValidator from '../helper/formValidator';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorsState, setErrorsState] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const checkError = (errors) => {
    setErrors(errors);
    let currErrorsState = errorsState;
    if (errors.email) {
      currErrorsState.email = true;
    } else {
      currErrorsState.email = false;
    }
    if (errors.password) {
      currErrorsState.password = true;
    } else {
      currErrorsState.password = false;
    }
    setErrorsState(currErrorsState);
  };

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
    let errors = formValidator(newUser);
    checkError(errors);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newUser);
      // navigate('/');
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
        <TextField error={errorsState.email} id={'email'} className='input' variant='standard' label='Email' helperText={errors.email} onChange={(e) => setEmail(e.target.value)}></TextField>
        <TextField
          error={errorsState.password}
          id={'password'}
          className='input'
          type='password'
          variant='standard'
          label='Password'
          helperText={errors.password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
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
