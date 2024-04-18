const ListCandidates = require("./list");
const CandidateInfo = require("./info");
const UpdateInfo = require('./update');
const ListCVs = require('./listCV');

class CandidateRepository {
    // [GET] /admin/candidates
    listCandidates = ListCandidates;
  
    // [GET] /admin/candidates/:id
    candidateInfo = CandidateInfo;
  
    // [PATCH] /admin/candidates/:id
    updateCandidate = UpdateInfo;

    // [GET] /:id/cvs
    listCVbyUserId = ListCVs;

}

module.exports = CandidateRepository;
