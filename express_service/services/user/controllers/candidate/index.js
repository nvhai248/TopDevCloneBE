const ListCandidates = require("./list");
const CandidateInfo = require("./info");
const UpdateInfo = require('./update');
const ListCVs = require('./listCV');
const mainCV = require('./mainCV');

class CandidateController {
  // [GET] /admin/candidates
  listCandidates = ListCandidates;

  // [GET] /admin/candidates/:id
  candidateInfo = CandidateInfo;

  // [PATCH] /admin/candidates/:id
  updateCandidate = UpdateInfo;

  // [GET] /:id/cvs
  listCVbyUserId = ListCVs;

  // [GET] /:id/main-cv
  mainCV = mainCV;

}

module.exports = CandidateController;