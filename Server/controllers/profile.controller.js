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
    if (response.success) {
      const { successMessage, status } = response.success;
      return res.status(status).send(successMessage);
    }
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }
};

const removeSeries = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  const { mal_id } = req.body;
  try {
    const response = await profileRepository.removeSeries(mal_id, user);
    if (response.errors) {
      throw response.errors;
    }
    if (response.success) {
      const { successMessage, status } = response.success;
      return res.status(status).send(successMessage);
    }
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }
};

const updateEpisodeStatus = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  const { mal_id, episodeClicked } = req.body;
  try {
    const response = await profileRepository.updateEpisodeStatus(mal_id, episodeClicked, user);
    if (response.errors) {
      throw response.errors;
    }
    if (response.success) {
      const { successMessage, status } = response.success;
      return res.status(status).send(successMessage);
    }
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send(errorMessage);
  }
};

module.exports = { getProfile, addSeries, removeSeries, updateEpisodeStatus };
