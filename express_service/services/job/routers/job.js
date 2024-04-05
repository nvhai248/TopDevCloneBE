const express = require(`express`);
const auth = require("../middlewares/auth");
const { JobTransport } = require("../transports");
const jobRouter = express.Router();
const transport = new JobTransport();

jobRouter.get("/:id", auth, transport.findJob);
jobRouter.patch("/:id", auth, transport.updateJob);
jobRouter.post("/", auth, transport.createJob);

module.exports = jobRouter;
