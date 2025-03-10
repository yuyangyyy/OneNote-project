const mysql2 = require('mysql2');

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = require('./env');

const pool = mysql2.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
