const express = require(`express`);
const { AdminTransport } = require("../transport");
const adminRouter = express.Router();
AdminTransport;

adminRouter.get("/", AdminTransport.GetAccountById);

module.exports = adminRouter;
