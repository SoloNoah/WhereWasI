// const UserRepository = require('../repositories/user.repository');

/**
 * @Get
 */
const getUser = async (req, res) => {
  res.send('got user');
};

module.exports = { getUser };
