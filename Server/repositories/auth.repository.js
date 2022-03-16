const bcrypt = require('bcryptjs');

const User = require('../models/userModel');
class AuthRepository {
  constructor() {}

  async findUser(email) {
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return { errors: { errorMessage: 'Invalid credentials.', status: 401 } };
      }

      return userData;
    } catch (error) {
      return { errors: { errorMessage: 'Server Error.', status: 500 } };
    }
  }

  async saveUser(email, password) {
    try {
      let user = await User.findOne({ email });
      if (user) {
        return { errors: { errorMessage: 'User already exists.', status: 401 } };
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
