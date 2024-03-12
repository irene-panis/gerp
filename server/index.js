const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes); // Mount all routes under the /api base URL

app.listen(5000, () => {
  console.log(`Listening on port 5000!`)
});