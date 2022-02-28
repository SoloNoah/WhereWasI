const jwt = require('jsonwebtoken');
const config = require('config');

const generateAuthToken = (user, handleCallback) => {
  const payload = {
    user: {
      id: user.id,
    },
  };
  try {
    let token = jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, handleCallback());
    return token;
  } catch (error) {
    throw { errors: { errorMessage: 'Server error', status: 500 } };
  }
};
// const verifyAuthToken = async (token) => {
//   const payload = jwt.verify(token, process.env.TOKEN_SECRET);
//   const user = await User.findOne(payload.user);
//   return user;
// };

module.exports = { generateAuthToken };
