const CandidateInfo = require('./feats/candidateInfo');
const UpdateCandidate = require('./feats/updateCandidate');
const ListCVs = require('./feats/listCVs');
const mainCV = require('./feats/mainCV');

class AdminTransport {
  // [GET] /profile/:id
  candidateInfo = CandidateInfo;
  
  // [PATCH] /profile/:id
  updateCandidate = UpdateCandidate;

  // [GET] /:id/cvs
  listCVbyUserId = ListCVs;

  // [GET] /:id/main-cv
  mainCV = mainCV;
}

module.exports = AdminTransport;
