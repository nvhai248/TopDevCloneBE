const CandidateInfo = require('./feats/candidateInfo');
const UpdateCandidate = require('./feats/updateCandidate');
const ListCVs = require('./feats/listCVs');
const MainCV = require('./feats/mainCV');
const UploadCV = require('./feats/uploadCV');

class AdminTransport {
  // [GET] /profile/:id
  candidateInfo = CandidateInfo;
  
  // [PATCH] /profile/:id
  updateCandidate = UpdateCandidate;

  // [GET] /:id/cvs
  listCVbyUserId = ListCVs;

  // [GET] /:id/main-cv
  mainCV = MainCV;

  // [POST] /upload-cv
  uploadCV = UploadCV;
}

module.exports = AdminTransport;
