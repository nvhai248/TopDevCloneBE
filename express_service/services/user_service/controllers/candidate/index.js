const ListCandidates = require("./list");
const CandidateInfo = require("./info");
const UpdateInfo = require('./update');

class CandidateController {
  // [GET] /admin/candidates
  listCandidates = ListCandidates;

  // [GET] /admin/candidates/:id
  candidateInfo = CandidateInfo;
  
  // [PATCH] /admin/candidates/:id
  updateCandidate = UpdateInfo;
}

module.exports = CandidateController;