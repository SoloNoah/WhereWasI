const Profile = require('../models/profileModel');

class ProfileRepository {
  constructor() {}

  async findProfile(id) {
    try {
      const userData = await Profile.findOne({ user: id });
      if (!userData) {
        return { errors: { errorMessage: 'No profile for user.', status: 400 } };
      }
      return userData;
    } catch (error) {
      return { errors: { errorMessage: 'Server Error.', status: 500 } };
    }
  }

  async addSeries(seriesToAdd, user) {
    const profileFields = { user: user.id, series: [seriesToAdd] };
    let successMessage = 'Added series to user profile';

    try {
      let profile = await this.findProfile(user.id);
      let errors = profile.errors;
      if (!errors) {
        let seriesArray = [...profile.series];
        let seriesExists = seriesArray.find((series) => series.mal_id === seriesToAdd.mal_id);
        if (seriesExists) {
          return { errors: { errorMessage: 'User already got show added to profile.', status: 400 } };
        }
        seriesArray.push(seriesToAdd);
        profileFields.series = seriesArray;
        let id = profile.id;
        profile = await Profile.findByIdAndUpdate(id, profileFields);
        if (!profile) {
          return { errors: { errorMessage: 'Server Error.', status: 500 } };
        }
      } else {
        profileFields.series = [seriesToAdd];
        profile = new Profile(profileFields);
        await profile.save();
      }
      return { success: { status: 200, successMessage } };
    } catch (error) {
      return { errors: { errorMessage: 'Server Error.', status: 500 } };
    }
  }

  async removeSeries(mal_id, user) {
    try {
      let profile = await this.findProfile(user.id);
      let errors = profile.errors;
      let removed = false;
      if (!errors) {
        const removeIndex = profile.series.map((item) => item.mal_id).indexOf(mal_id);
        if (removeIndex >= 0) {
          profile.series.splice(removeIndex, 1);
          removed = true;
        }
      }
      let successMessage = "Item doesn't exist in profile.";
      if (removed) {
        await profile.save();
        successMessage = 'Removed from profile.';
      }
      return { success: { status: 200, successMessage } };
    } catch (error) {
      return { errors: { errorMessage: 'Server Error.', status: 500 } };
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
