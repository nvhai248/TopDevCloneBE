const ListJobsByCompanyId = require('./listJobs');
class CompanyTransport {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
}

module.exports = CompanyTransport;
