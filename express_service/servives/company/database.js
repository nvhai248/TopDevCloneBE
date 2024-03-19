const mysql = require("mysql");
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "topdev_schema",
});

module.exports = dbConnection;
