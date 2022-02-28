const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ errors: [{ msg: 'User already exists.' }] });
    }
    user = await new User({ email, password }).save();
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
    // await user.save();
    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };
    // jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
    //   if (err) throw err;
    //   res.json({ token });
    // });
    return user;
  }
}

module.exports = AuthRepository;
