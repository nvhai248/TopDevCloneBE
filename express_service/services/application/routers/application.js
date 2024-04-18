const express = require(`express`);
const auth = require("../middlewares/auth");
const { ApplicationTransport } = require("../transports");
const applicationRouter = express.Router();
const transport = new ApplicationTransport();

// jobRouter.get("/", transport.listJobByConditions);
// jobRouter.patch("/:id/approve", auth, transport.approveJob);
// jobRouter.delete("/:id/refuse", auth, transport.refuseJob);
// jobRouter.get("/:id", auth, transport.findJob);
// jobRouter.patch("/:id", auth, transport.updateJob);
applicationRouter.post("/", auth, transport.applyJob);
applicationRouter.get("/list-apply/:id", auth, transport.listApply);


module.exports = applicationRouter;
