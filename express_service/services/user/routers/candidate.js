const express = require(`express`);
const auth = require("../middlewares/auth");
const { CandidateTransport } = require("../transports");
const candidateRouter = express.Router();
const transport = new CandidateTransport();

candidateRouter.get("/profile/:id", auth, transport.candidateInfo);
candidateRouter.patch("/profile/:id", auth, transport.updateCandidate);
candidateRouter.get("/:id/cvs", auth, transport.listCVbyUserId);
candidateRouter.get("/:id/main-cv", auth, transport.mainCV);
candidateRouter.post("/upload-cv", transport.uploadCV);

module.exports = candidateRouter;