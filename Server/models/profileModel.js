const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EpisodeSchema = new mongoose.Schema({
  mal_id: {
    type: Number,
    required: true,
  },
  episode: {
    type: Number,
  },
  watched: {
    type: Boolean,
    default: false,
  },
});

const SeriesSchema = new mongoose.Schema({
  mal_id: {
    type: Number,
    required: true,
  },
  episodes: [EpisodeSchema],
});
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  series: [SeriesSchema],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
