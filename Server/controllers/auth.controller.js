const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const AuthRepository = require('../repositories/auth.repository');
const { generateAuthToken } = require('../utils/token');
const config = require('config');

const authRepository = new AuthRepository();
const User = require('../models/userModel');

const login = async (req, res) => {
  res.send('login');
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
      return res.status(status).send(errorMessage);
    }
    const token = generateAuthToken(user, handleCallback);
    return res.status(200).send({ status: 200, token });
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }
};

module.exports = { login, register };
