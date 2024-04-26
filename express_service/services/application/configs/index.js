require("dotenv").config();

const PORT = process.env.PORT;
const GRPC_JOB_SERVER = process.env.GRPC_JOB_SERVER;
const DB_MYSQL_USERNAME = process.env.DB_MYSQL_USERNAME;
const DB_MYSQL_PASSWORD = process.env.DB_MYSQL_PASSWORD;
const DB_MYSQL_DBNAME = process.env.DB_MYSQL_DBNAME;
const DB_MYSQL_HOST = process.env.DB_MYSQL_HOST;
const DB_PG_URI = process.env.DB_PG_URI;
const DB_MONGOO_URI = process.env.DB_MONGOO_URI

module.exports = {
    PORT,
    DB_MYSQL_USERNAME,
    DB_MYSQL_DBNAME,
    DB_MYSQL_PASSWORD,
    DB_MYSQL_HOST,
    GRPC_JOB_SERVER,
    DB_PG_URI,
    DB_MONGOO_URI
};
