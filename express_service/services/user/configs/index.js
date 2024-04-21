require("dotenv").config();

const PORT = process.env.PORT;
const DB_MYSQL_USERNAME = process.env.DB_MYSQL_USERNAME;
const DB_MYSQL_PASSWORD = process.env.DB_MYSQL_PASSWORD;
const DB_MYSQL_DBNAME = process.env.DB_MYSQL_DBNAME;
const DB_MYSQL_HOST = process.env.DB_MYSQL_HOST;

module.exports = {
  PORT,
  DB_MYSQL_USERNAME,
  DB_MYSQL_DBNAME,
  DB_MYSQL_PASSWORD,
  DB_MYSQL_HOST,
};
