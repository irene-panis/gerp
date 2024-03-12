const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "peachy",
  host: "localhost",
  port: 5432,
  database: "gerpdb"
});

module.exports = pool;