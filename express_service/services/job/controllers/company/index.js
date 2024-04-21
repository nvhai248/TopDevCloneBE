const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const CreateProduct = require('./createProduct');
const ListCompanySlider = require('./slider');

class CompanyController {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;
  // [POST] /companies
  createCompany = CreateCompany;
  // [GET] /companies/:id
  findCompanyById = FindCompanyById;
  // [PATCH] /companies/:id
  updateCompany = UpdateCompany;
  // [POST] /companies/:id/product
  createProduct = CreateProduct;
  // [GET] /companies/slider
  listCompanySlider = ListCompanySlider;
}

module.exports = CompanyController;
