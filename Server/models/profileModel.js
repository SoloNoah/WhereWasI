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
  // title: {
  //   type: String,
  //   required: true,
  // },
  episodes: [EpisodeSchema],
  // type: {
  //   type: String,
  // },
  // image_url: {
  //   type: String,
  // },
  // start_date: {
  //   type: Date,
  // },
});
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  series: [SeriesSchema],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
