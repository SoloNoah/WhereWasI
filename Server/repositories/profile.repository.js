const Profile = require('../models/profileModel');

class ProfileRepository {
  constructor() {}

  async findProfile(id) {
    try {
      const userData = await Profile.findOne({ user: id });
      console.log(userData);
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
    try {
      let profile = await Profile.findOne({ user: user.id });
      if (profile) {
        let seriesArray = [...profile.series];
        let seriesExists = seriesArray.find((series) => series.mal_id === seriesToAdd.mal_id);
        if (seriesExists) {
          return { errors: { errorMessage: 'User already got show added to profile.', status: 400 } };
        }
        seriesArray.push(seriesToAdd);
        profileFields.series = seriesArray;
        profile = await Profile.findOneAndUpdate(profileFields);
        if (!profile) {
          return { errors: { errorMessage: 'Server Error.', status: 500 } };
        }
        return profile;
        // return { errors: { errorMessage: 'WIP.', status: 400 } };
      } else {
        profileFields.series = [seriesToAdd];
        profile = new Profile(profileFields);
        await profile.save();
        return profile;
      }
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
