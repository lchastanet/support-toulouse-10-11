const mysql = require("mysql2");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql
  .createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  })
  .promise();

module.exports = connection;
