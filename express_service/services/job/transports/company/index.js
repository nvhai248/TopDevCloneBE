const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const ListCompanySlider = require('./slider');
const FilterCompany = require('./filter');
class CompanyTransport {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
  // [POST] /companies
  createCompany = CreateCompany;
  // [GET] /companies/:id
  findCompanyById = FindCompanyById;
  // [PATCH] /companies/:id
  updateCompany = UpdateCompany;
  // [GET] /companies/slider
  listCompanySlider = ListCompanySlider;
  // [GET] /companies
  filterCompany = FilterCompany;
}

module.exports = CompanyTransport;
