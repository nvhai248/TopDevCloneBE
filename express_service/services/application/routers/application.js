const express = require(`express`);
const auth = require("../middlewares/auth");
const { ApplicationTransport } = require("../transports");
const applicationRouter = express.Router();
const transport = new ApplicationTransport();

applicationRouter.post("/", auth, transport.applyJob);
applicationRouter.get("/list-apply/:id", auth, transport.listApply);
applicationRouter.patch("/:id", auth, transport.updateProcessApplication);



module.exports = applicationRouter;
