const config = require('config');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
class AuthRepository {
  constructor() {}

  async findUser(email, password) {
    // const user = await User.findOne({ email }).select('+password');
    // if (!user || !(await user.isPasswordMatch(password))) {
    //   return null;
    // }
    // return user;
  }

  async saveUser(email, password) {
    try {
      let user = await User.findOne({ email });
      if (user) {
        return { errors: { errorMessage: 'Invalid credentials.', status: 401 } };
      }
      user = await new User({ email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      return user;
    } catch (error) {
      return { errors: { errorMessage: 'Server error', status: 500 } };
    }
  }
}

module.exports = AuthRepository;
