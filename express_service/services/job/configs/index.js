require('dotenv').config();

const PORT = process.env.PORT;
const DB_MYSQL_USERNAME = process.env.DB_MYSQL_USERNAME;
const DB_MYSQL_PASSWORD = process.env.DB_MYSQL_PASSWORD;
const DB_MYSQL_DBNAME = process.env.DB_MYSQL_DBNAME;
const DB_MYSQL_HOST = process.env.DB_MYSQL_HOST;
const GRPC_JOB_SERVER = process.env.GRPC_JOB_SERVER;

const DB_PG_URI = process.env.DB_PG_URI;
const DB_URI_1 = process.env.DB_URI_1;
const DB_URI_2 = process.env.DB_URI_2;
const DB_URI_3 = process.env.DB_URI_3;
const RABBITMQ_CONNECTION_STRING = process.env.RABBITMQ_CONNECTION_STRING;

module.exports = {
  PORT,
  DB_MYSQL_USERNAME,
  DB_MYSQL_DBNAME,
  DB_MYSQL_PASSWORD,
  DB_MYSQL_HOST,
  RABBITMQ_CONNECTION_STRING,
  DB_PG_URI,
  GRPC_JOB_SERVER,
  DB_URI_1,
  DB_URI_2,
  DB_URI_3,
};
