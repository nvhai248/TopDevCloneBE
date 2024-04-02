const express = require("express");
// const dbConnection = require("./database");
const routes = require("./handlers");
const app = express();

app.use(express.json());
// dbConnection.connect();

app.use("/", routes);

app.listen(5005, () => {
  console.log("Company is listening to port 5005");
});
