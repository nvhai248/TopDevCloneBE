const ListCandidates = require("./list");
const CandidateInfo = require("./info");
const UpdateInfo = require('./update');
const ListCVs = require('./listCV');
const MainCV = require('./mainCV');
const UploadCV = require('./uploadCV');

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
  mainCV = MainCV;

  // [POST] /upload-cv
  uploadCV = UploadCV;

}

module.exports = CandidateController;