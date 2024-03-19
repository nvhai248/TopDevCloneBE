const express = require("express");
const dbConnection = require("./database");
const routes = require("./handlers");
const app = express();

app.use(express.json());
dbConnection.connect();

app.use("/", routes);

app.listen(5004, () => {
  console.log("Employer is listening to port 5004");
});
