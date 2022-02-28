const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return decrypt(password) === decrypt(user.password);
};

const User = mongoose.model('Users', UserSchema);
module.exports = User;
