const ListJobsByCompanyId = require("./listJobs");

class CompanyController {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
}

module.exports = CompanyController;
