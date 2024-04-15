const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
class CompanyTransport {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
  // [POST] /companies
  createCompany = CreateCompany
  // [GET] /companies/:id
  findCompanyById = FindCompanyById
}

module.exports = CompanyTransport;
