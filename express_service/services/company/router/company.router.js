const express = require(`express`);
const { CompanyTransport } = require("../transport");
const companyRouter = express.Router();

companyRouter.get("/", CompanyTransport.ListJobs);

module.exports = companyRouter;
