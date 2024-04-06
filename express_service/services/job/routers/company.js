const express = require(`express`);
const auth = require("../middlewares/auth");
const { CompanyTransport } = require("../transports");
const companyRouter = express.Router();
const transport = new CompanyTransport();

companyRouter.get("/:id/jobs", auth, transport.listJobsByCompanyId);

module.exports = companyRouter;
