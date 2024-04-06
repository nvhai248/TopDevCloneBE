const ListJobsByCompanyId = require("./listJobs");

class CompanyController {
  // [GET] /companies/:companyId/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
}

module.exports = CompanyController;
