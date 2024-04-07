const FindCompanyById = require("./find");
const ListJobsByCompanyId = require("./listJobs");

class CompanyRepository {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;

  // [GET] /companies/:id
  findCompanyById = FindCompanyById;
}

module.exports = CompanyRepository;
