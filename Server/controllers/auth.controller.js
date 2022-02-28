const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const AuthRepository = require('../repositories/auth.repository');
const authRepository = new AuthRepository();
const User = require('../models/userModel');

const login = async (req, res) => {
  res.send('login');
};

const register = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req.body);
  const { email, password } = req.body;
  const user = await authRepository.saveUser(email, password);
  if (!user) {
    return res.status(409).send('Email already exists.');
  }
  // const token = await generateAuthToken(user);
  // return res.status(200).send({ token, userId: user._id });
  return res.status(200).send({ status: 'registered' });
};

const generateAuthToken = async (user) => {
  return jwt.sign({ user }, process.env.TOKEN_SECRET);
};

module.exports = { login, register };
