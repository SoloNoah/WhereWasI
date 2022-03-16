import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import formValidator from '../helper/formValidator';
import { loginUser } from '../services/api';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorsState, setErrorsState] = useState({ email: false, password: false });
  const [errors, setErrors] = useState({});

  const [snackbarOpen, setOpen] = useState(false);
  const [snackbarMessage, setMessage] = useState('');

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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (window.localStorage.getItem('accessToken')) {
      // props.setLoggedin(true);
    }
  }, []);
  const onClick = async () => {
    const user = { email, password };
    let errors = formValidator(user);
    checkError(errors);
    if (!errorsState.email && !errorsState.password) {
      try {
        let response = await loginUser(user);
        if (response.status === 200) {
          navigate('/');
        }
        return;
      } catch (error) {
        setMessage(error.errorMessage);
        setOpen(true);
      }
    }
  };

  return (
    <div className='full-page form-page'>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <form className='form'>
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
      </form>
    </div>
  );
};

export default Login;
