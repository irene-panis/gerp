const express = require('express');
const router = express.Router();

// Import route modules
const profileRoutes = require('./profileRoutes');
// Import other route modules as needed

// Mount route modules
router.use('/profiles', profileRoutes);
// Mount other route modules as needed

module.exports = router;
