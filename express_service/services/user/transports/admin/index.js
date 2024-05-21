const ListCandidates = require('./feats/candidate_list');
const CandidateInfo = require('./feats/candidate_info');
const ListEmployers = require("./feats/employer_list");
const EmployerInfo = require("./feats/employer_info");
const UpdateEmployer = require('./feats/employer_update');

class AdminTransport {
  /////////////////////////////// CANDIDATE /////////////////////////////////
  // [GET] /admin/candidates
  listCandidates = ListCandidates;

  // [GET] /admin/candidates/:id
  candidateInfo = CandidateInfo;

  /////////////////////////////// EMPLOYER /////////////////////////////////

  // [GET] /admin/employers
  listEmployers = ListEmployers;

  // [GET] /admin/employers/:id
  employerInfo = EmployerInfo;

  // [PATCH] /admin/employers/:id
  updateEmployer = UpdateEmployer;

}

module.exports = AdminTransport;
