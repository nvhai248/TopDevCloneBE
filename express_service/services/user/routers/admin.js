const express = require(`express`);
const auth = require("../middlewares/auth");
const { AdminTransport } = require("../transports");
const adminRouter = express.Router();
const transport = new AdminTransport();

adminRouter.get("/candidates", auth, transport.listCandidates);
adminRouter.get("/candidates/:id", auth, transport.candidateInfo);
adminRouter.get("/employers", auth, transport.listEmployers);
adminRouter.get("/employers/:id", auth, transport.employerInfo);
adminRouter.patch("/employers/:id", auth, transport.updateEmployer);

module.exports = adminRouter;