const Profile = require("../models/profileModel");

class ProfileRepository {
  constructor() {}

  async findProfile(id) {
    try {
      let userData = await Profile.findOne({ user: id });
      if (!userData) {
        userData = await new Profile({ user: id });
        await userData.save();
        // throw { errors: { errorMessage: 'No profile for user.', status: 400 } };
      }
      return userData;
    } catch (error) {
      let errorMessage = error.message
        ? error.message
        : error.errors.errorMessage;
      throw { errors: { errorMessage, status: 500 } };
    }
  }

  async addSeries(seriesToAdd, user) {
    const profileFields = { user: user.id, series: [seriesToAdd] };
    let successMessage = "Added series to user profile";

    try {
      let profile = await this.findProfile(user.id);
      let errors = profile.errors;
      if (!errors) {
        let seriesArray = profile.series;
        let seriesExists = seriesArray.find(
          (series) => series.mal_id === seriesToAdd.mal_id
        );
        if (seriesExists) {
          return {
            errors: {
              errorMessage: "User already got show added to profile.",
              status: 400,
            },
          };
        }
        seriesArray.push(seriesToAdd);
        if (!profile) {
          return { errors: { errorMessage: "Server Error.", status: 500 } };
        }
      } else {
        profileFields.series = [seriesToAdd];
        profile = new Profile(profileFields);
      }
      await profile.save();

      return { success: { status: 200, successMessage } };
    } catch (error) {
      let errorMessage = error.message
        ? error.message
        : error.errors.errorMessage;
      return { errors: { errorMessage, status: 500 } };
    }
  }

  async removeSeries(mal_id, user) {
    try {
      let successMessage = "";
      let profile = await this.findProfile(user.id);
      let errors = profile.errors;
      let removed = false;
      if (!errors) {
        const removeIndex = profile.series
          .map((item) => item.mal_id)
          .indexOf(mal_id);
        if (removeIndex >= 0) {
          profile.series.splice(removeIndex, 1);
          removed = true;
          successMessage = "Removed from profile.";
        } else {
          successMessage = "Item doesn't exist in profile.";
        }
      }
      if (removed) {
        await profile.save();
      }
      return { success: { status: 200, successMessage } };
    } catch (error) {
      let errorMessage = error.message
        ? error.message
        : error.errors.errorMessage;
      return { errors: { errorMessage, status: 500 } };
    }
  }

  async updateEpisodeStatus(mal_id, episodeClicked) {
    try {
      let profile = await this.findProfile(user.id);
      let errors = profile.errors;

      if (!errors) {
        let seriesArray = profile.series;
        let show = seriesArray.find(
          (singleShow) => singleShow.mal_id == mal_id
        );
        if (!show) {
          return {
            errors: { errorMessage: "Wrong show selected.", status: 400 },
          };
        }
        let epi = show.episodes.find(
          (singleEpi) => singleEpi.episode == episodeClicked
        );
        if (!epi) {
          return {
            errors: {
              errorMessage: "Episode doesn't exist for chosen show.",
              status: 400,
            },
          };
        }
        epi.watched = !epi.watched;
        await profile.save();
      }

      successMessage = "Updated episode watched status.";

      return { success: { status: 200, successMessage } };
    } catch (error) {
      let errorMessage = error.message
        ? error.message
        : error.errors.errorMessage;
      return { errors: { errorMessage, status: 500 } };
    }
  }

  async getEpisodes(mal_id, user) {
    try {
      let profile = await this.findProfile(user.id);
      let show = profile.series.find(
        (singleShow) => singleShow.mal_id == mal_id
      );
      if (!show) {
        throw {
          errors: {
            errorMessage: "No Such show in user's profile.",
            status: 500,
          },
        };
      }
      let response = show.episodes;

      return { success: { status: 200, episodes: response } };
    } catch (error) {
      let errorMessage = error.message
        ? error.message
        : error.errors.errorMessage;
      throw { errors: { errorMessage, status: 500 } };
    }
  }

  generateEpisodes(mal_id, episodeNumber) {
    let episodeArray = [];
    for (let i = 1; i <= episodeNumber; i++) {
      let singleEpisode = { mal_id, episode: i };
      episodeArray.push(singleEpisode);
    }
    return episodeArray;
  }
}

module.exports = ProfileRepository;
