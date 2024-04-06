const ListJobsByCompanyId = require("./listJobs");

class CompanyRepository {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
}

module.exports = CompanyRepository;
