import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { connect } from "react-redux";

import formValidator from "../helper/formValidator";
import { register, resetRegister } from "../store/actions/authAction";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = ({
  registerSuccess,
  failErrorMessage,
  register,
  resetRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [errorsState, setErrorsState] = useState({
    email: false,
    password: false,
    passwordRepeat: false,
  });
  const [errors, setErrors] = useState({});

  const [snackbarOpen, setOpen] = useState(false);
  const [snackbarMessage, setMessage] = useState("");

  const [submitClicked, setSubmitClicked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitClicked(true);
    // await onClick();
  };

  useEffect(() => {
    if (submitClicked) {
      const handleClick = async () => {
        await onClick();
      };
      handleClick();
    }
    setSubmitClicked(false);
  }, [submitClicked]);

  useEffect(() => {
    if (registerSuccess) {
      resetRegister();
      navigate("/login");
    }
    if (!registerSuccess && failErrorMessage) {
      setMessage(failErrorMessage);
      setOpen(true);
    }
  }, [registerSuccess]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
    if (
      !errorsState.email &&
      !errorsState.password &&
      !errorsState.passwordRepeat
    ) {
      register(newUser);
    }
  };

  return (
    <div className="full-page form-page">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <form className="form">
        <span className="form-header">
          <h1>Register</h1>
          <h4>Join and start binging</h4>
        </span>

        <TextField
          error={errorsState.email}
          id={"email"}
          className="input"
          variant="standard"
          label="Email"
          helperText={errors.email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          error={errorsState.password}
          id={"password"}
          className="input"
          type="password"
          variant="standard"
          label="Password"
          helperText={errors.password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>

        <TextField
          error={errorsState.passwordRepeat}
          id={"password-repeat"}
          className="input"
          type="password"
          variant="standard"
          label="Repeat Password"
          helperText={errors.passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        ></TextField>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className="submit"
        >
          Submit
        </Button>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="form-link">Login</p>
        </Link>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerSuccess: state.authReducer.registerSuccess,
    failErrorMessage: state.authReducer.failErrorMessage,
  };
};

const mapDispatchToProps = {
  register,
  resetRegister,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
