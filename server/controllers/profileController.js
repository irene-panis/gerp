const Profile = require('../models/Profile');

const profileController = {
  createProfile: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newProfile = await Profile.createProfile({ username, email, password });
      res.status(201).json(newProfile);
    } catch (error) {
      console.error('Error creating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllProfiles: async (req, res) => {
    try {
      const profiles = await Profile.getAllProfiles();
      res.json(profiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = profileController;