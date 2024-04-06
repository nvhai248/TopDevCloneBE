const ListJobsByCompanyId = require("./listJobs");

class CompanyRepository {
  // [GET] /companies/:companyId/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
}

module.exports = CompanyRepository;
