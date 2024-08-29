const { Pool } = require('pg');

const pool = new Pool({
  user: '21CS30053',
  host: 'localhost',
  database: '21CS30053',
  password: '21CS30053',
  port: 5432, // Default PostgreSQL port
});// db.js


module.exports = pool;
