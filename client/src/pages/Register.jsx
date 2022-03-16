import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, Button } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
  };
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
    <div className='full-page form-page'>
      <div className='form'>
        <span className='form-header'>
          <h1>Register</h1>
          <h4>Join and start binging</h4>
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
        <FormControl>
          <InputLabel className='inputLabel' htmlFor={'password'}>
            Repeat Password
          </InputLabel>
          <Input id={'password-repeat'} required={true} className='input' type='password' onChange={(e) => setPasswordRepeat.setBottom(e.target.value)} />
        </FormControl>
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
