const CreateCompany = require("./create");
const FindCompanyById = require("./find");
const ListJobsByCompanyId = require("./listJobs");

class CompanyRepository {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;

  // [GET] /companies/:id
  findCompanyById = FindCompanyById;

  // [POST] /companies
  createCompany = CreateCompany
}

module.exports = CompanyRepository;
