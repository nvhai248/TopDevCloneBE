const CandidateInfo = require('./feats/candidateInfo');
const UpdateCandidate = require('./feats/updateCandidate');

class AdminTransport {
  // [GET] /profile/:id
  candidateInfo = CandidateInfo;
  
  // [PATCH] /profile/:id
  updateCandidate = UpdateCandidate;

}

module.exports = AdminTransport;
