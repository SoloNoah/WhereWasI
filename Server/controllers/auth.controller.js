/**
 * @Get
 */
const getAuth = async (req, res) => {
  res.send('got authentication');
};

module.exports = { getAuth };
