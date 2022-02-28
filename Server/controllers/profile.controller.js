/**
 * @Get
 */
const getProfile = async (req, res) => {
  res.send('got user profile');
};

module.exports = { getProfile };
