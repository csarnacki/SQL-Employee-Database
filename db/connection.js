const sql = require('mysql2');
require('dotenv').config();

const db = sql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Scarecrow936!',
      database: 'employeeTracker_db'
    },
  );

module.exports = db;