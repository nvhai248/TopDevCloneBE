const express = require(`express`);
const { JobTransport } = require("../transport");
const jobRouter = express.Router();
JobTransport;

jobRouter.get("/", JobTransport.ListJob);

module.exports = jobRouter;
