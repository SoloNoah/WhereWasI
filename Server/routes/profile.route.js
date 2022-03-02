const express = require('express');
const profileController = require('../controllers/profile.controller');

/**
 * middlewares
 */
const { verifyAuthToken } = require('../middlewares/validators/authValidator');

const router = express.Router();

router.post('/add-series', verifyAuthToken, profileController.addSeries);
router.post('/remove-series', verifyAuthToken, profileController.removeSeries);
router.put('/update-episode-status', verifyAuthToken, profileController.updateEpisodeStatus);

router.get('/get-profile', verifyAuthToken, profileController.getProfile);

module.exports = router;
