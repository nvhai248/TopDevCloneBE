const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const CreateProduct = require('./createProduct');
const ListCompanySlider = require('./slider');

class CompanyRepository {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;

  // [GET] /companies/:id
  findCompanyById = FindCompanyById;

  // [POST] /companies
  createCompany = CreateCompany;

  // [PATCH] /companies/:id
  updateCompany = UpdateCompany;

  // [POST] /companies/:id/product
  createProduct = CreateProduct;

  // [GET] /companies/slider
  listCompanySlider = ListCompanySlider;
}

module.exports = CompanyRepository;
