const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Route to create a new profile
router.post('/', profileController.createProfile);

// Route to get all profiles
router.get('/', profileController.getAllProfiles);

module.exports = router;
