const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const AuthRepository = require('../repositories/auth.repository');
const { generateAuthToken } = require('../utils/token');

const authRepository = new AuthRepository();
const User = require('../models/userModel');

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await authRepository.findUser(email);
    if (user.errors) {
      throw user.errors;
    }
    //TODO move this into the repository
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ errorMessage: 'Invalid credentials.' });
    }

    const token = generateAuthToken(user, handleCallback);
    user.token = token;
    return res.status(200).send({ status: 200, token, email: user.email });
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }

  // try {
  //   const user = await authRepository.findUser(req.user);
  //   if (user.errors) {
  //     const { errorMessage, status } = user.errors;
  //     return res.status(status).send(errorMessage);
  //   }
  //   return res.status(200).send({ status: 200, user });
  // } catch (error) {
  //   const { errorMessage, status } = error;
  //   return res.status(status).send(errorMessage);
  // }
};

const handleCallback = (err, token) => {
  if (err) throw err;
  return token;
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await authRepository.saveUser(email, password);
    if (user.errors) {
      const { errorMessage, status } = user.errors;
      return res.status(status).send({errorMessage});
    }
    const token = generateAuthToken(user, handleCallback);
    return res.status(200).send({ status: 200, token });
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send({errorMessage});
  }
};

module.exports = { login, register };
