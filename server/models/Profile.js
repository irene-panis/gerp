const pool = require('../config/db');

// Create a new profile
async function createProfile({ username, email, password }) {
  const query = 'INSERT INTO profile (username, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [username, email, password];
  try {
      const { rows } = await pool.query(query, values);
      return rows[0];
  } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
  }
}

// Get all profiles
async function getAllProfiles() {
  const query = 'SELECT * FROM profile';
  try {
      const { rows } = await pool.query(query);
      return rows;
  } catch (error) {
      console.error('Error fetching profiles:', error);
      throw error;
  }
}

module.exports = {
  createProfile,
  getAllProfiles
};