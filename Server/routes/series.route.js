const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

/**
 * middlewares
 */
const { validateUser, verifyAuthToken, validateLogin} = require('../middlewares/validators/authValidator');

router.post('/login', validateLogin, authController.login);
router.post('/register', validateUser, authController.register);

module.exports = router;
