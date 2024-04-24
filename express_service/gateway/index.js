const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', proxy('http://localhost:5001'));
app.use('/jobs', proxy('http://localhost:5002'));
app.use('/applications', proxy('http://localhost:5003'));

app.use('/', (req, res, next) => {
  return res.status(200).json({ "msg": "Hello from GATEWAY!" });
})

app.listen(5000, () => {
  console.log("Gateway is listening to port 5000");
});
