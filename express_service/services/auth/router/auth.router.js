const express = require(`express`);
const { AuthTransport } = require("../transport");
const authRouter = express.Router();

authRouter.get("/", AuthTransport.ListAccounts);

module.exports = authRouter;
