const express = require('express');
const authController = require('../controllers/auth.controller');
const { check, validationResult } = require('express-validator');

const router = express.Router();

/**
 * middlewares
 */
const { validateUser } = require('../middlewares/validators/authValidator');
router.post('/login', validateUser, authController.login);
router.post('/register', validateUser, authController.register);

module.exports = router;
