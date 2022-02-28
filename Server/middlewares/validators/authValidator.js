const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const config = require('config');

const validateUser = [
  [
    check('email').trim().normalizeEmail().isEmail().bail().withMessage('Enter a valid email'),
    check('password').trim().not().isEmpty().bail().withMessage('Password cannot be empty!').isLength({ min: 6 }).withMessage('must be at least 6 chars long').bail(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const validateLogin = [
  [check('email').trim().normalizeEmail().isEmail().bail().withMessage('Enter a valid email'), check('password').trim().not().isEmpty().bail().withMessage('Password cannot be empty!')],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const verifyAuthToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ errors: { errorMessage: 'No token, authorization denied.' } });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ errors: { errorMessage: 'Invalid token.' } });
  }
};

module.exports = { validateUser, verifyAuthToken, validateLogin };
