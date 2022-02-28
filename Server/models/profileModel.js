const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
});

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  series: [SeriesSchema],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
