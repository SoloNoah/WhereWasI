const jwt = require('jsonwebtoken');
const config = require('config');

const generateAuthToken = (user, handleCallback) => {
  const payload = {
    user: {
      id: user.id,
    },
  };
  try {
    let token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' }, handleCallback());
    return token;
  } catch (error) {
    throw { errors: { errorMessage: 'Server error', status: 500 } };
  }
};

module.exports = { generateAuthToken };
