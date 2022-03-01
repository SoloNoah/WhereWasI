const { validationResult } = require('express-validator');

const ProfileRepository = require('../repositories/profile.repository');

const profileRepository = new ProfileRepository();

/**
 * @Get
 */
const getProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  try {
    const userProfile = await profileRepository.findProfile(user.id);
    if (userProfile.errors) {
      throw userProfile.errors;
    }
    return res.status(200).send({ status: 200, userProfile });
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }
};

const addSeries = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  const { mal_id, episodes } = req.body;
  let episodesArray = profileRepository.generateEpisodes(mal_id, episodes);
  let seriesToAdd = { mal_id, episodes: episodesArray };
  try {
    const response = await profileRepository.addSeries(seriesToAdd, user);
    if (response.errors) {
      throw response.errors;
    }
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }

  res.send('added to user profile');
};

module.exports = { getProfile, addSeries };
