const { validationResult } = require("express-validator");

const ProfileRepository = require("../repositories/profile.repository");
const SeriesRepository = require("../repositories/series.repository");

const profileRepository = new ProfileRepository();
const seriesRepository = new SeriesRepository();

const getProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = 4;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    const userProfile = await profileRepository.findProfile(user.id);
    const slicedSeries = userProfile.series.slice(startIndex, endIndex);
    const idArray = slicedSeries.map((show) => show.mal_id);
    const userData = {
      user: userProfile.user,
      series: [],
    };
    let seriesResults = await seriesRepository
      .getAllSeriesInProfile(idArray)
      .then((results) => {
        return results;
      });
    for (let i = 0; i < seriesResults.length; i++) {
      let obj = {
        mal_id: idArray[i],
        episodes: seriesResults[i],
        synopsis: userProfile.series[i].synopsis,
        image_url: userProfile.series[i].image_url,
      };
      userData.series.push(obj);
    }
    return res.status(200).send({ status: 200, userProfile: userData });
  } catch (error) {
    const errorMessage = "Couldn't fetch profile";
    const status = 500;
    return res.status(status).send(errorMessage);
  }
};

const addSeries = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  /**
   * TODO: should add title of the series as well
   */
  const { mal_id, episodes, synopsis, image_url } = req.body;
  let episodesArray = profileRepository.generateEpisodes(mal_id, episodes);
  let seriesToAdd = { mal_id, episodes: episodesArray, synopsis, image_url };
  try {
    const response = await profileRepository.addSeries(seriesToAdd, user);
    if (response.errors) {
      throw response.errors;
    }
    if (response.success) {
      const { successMessage, status, profile } = response.success;
      return res.status(status).send({ status, successMessage, profile });
    }
  } catch (error) {
    const { errorMessage, status } = error;
    return res.status(status).send({ status, errorMessage });
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
      return res.status(status).send({ status, successMessage });
    }
  } catch (error) {
    const { errorMessage, status } = error.errors;
    return res.status(status).send({ status, errorMessage });
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
    const response = await profileRepository.updateEpisodeStatus(
      mal_id,
      episodeClicked,
      user
    );
    if (response.errors) {
      throw response.errors;
    }
    if (response.success) {
      const { successMessage, status } = response.success;
      return res.status(status).send(successMessage);
    }
  } catch (error) {
    const { errorMessage, status } = error.errors;
    return res.status(status).send(errorMessage);
  }
};

const getEpisodes = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.user;
  let mal_id = req.query.id;
  try {
    let response = await profileRepository.getEpisodes(mal_id, user);
    const { status, episodes } = response.success;
    return res.status(status).send(episodes);
  } catch (error) {
    const { errorMessage, status } = error.errors;
    return res.status(status).send(errorMessage);
  }
};

module.exports = {
  getProfile,
  addSeries,
  removeSeries,
  updateEpisodeStatus,
  getEpisodes,
};
