const ListCandidates = require('./feats/listCandidates');
const CandidateInfo = require('./feats/candidateInfo');
const ListEmployers = require("./feats/listEmployers");
const EmployerInfo = require("./feats/employerInfo");
const UpdateEmployer = require('./feats/updateEmployer');

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
