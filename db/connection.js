const sql = require('mysql2');
require('dotenv').config();

const connect = mysql.databaseConnection (
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_DATABASE
);

module.exports = connect;