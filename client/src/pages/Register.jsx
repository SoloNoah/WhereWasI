import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

import formValidator from '../helper/formValidator';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const [errorsState, setErrorsState] = useState({ email: false, password: false, passwordRepeat: false });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
  };

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
    if (errors.passwordRepeat) {
      currErrorsState.passwordRepeat = true;
    } else {
      currErrorsState.passwordRepeat = false;
    }
    setErrorsState(currErrorsState);
  };

  const onClick = async () => {
    const newUser = { email, password, passwordRepeat };
    let errors = formValidator(newUser);
    checkError(errors);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // navigate('/login');

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
    <div className='full-page form-page'>
      <div className='form'>
        <span className='form-header'>
          <h1>Register</h1>
          <h4>Join and start binging</h4>
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

        <TextField
          error={errorsState.passwordRepeat}
          id={'password-repeat'}
          className='input'
          type='password'
          variant='standard'
          label='Repeat Password'
          helperText={errors.passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        ></TextField>

        <Button variant='contained' color='primary' type='submit' onClick={handleSubmit} className='submit'>
          Submit
        </Button>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <p className='form-link'>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
