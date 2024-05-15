const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const CreateProduct = require('./createProduct');
const ListCompanySlider = require('./slider');
const FilterCompany = require('./filter');
const CreateCompanyWithSharding = require('./createCompanySharding');
const FindCompanyByIdWithSharding = require('./findCompanySharding');
const FilterCompanyWithSharding = require('./filterCompanySharding');
class CompanyTransport {
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
  // [GET] /companies
  filterCompany = FilterCompany;
  // [POST] /companies/create
  createCompanyWithSharding = CreateCompanyWithSharding;
  // [GET] /companies/find/:id
  findCompanyByIdWithSharding = FindCompanyByIdWithSharding;
  //
  filterCompanyWithSharding = FilterCompanyWithSharding;
}

module.exports = CompanyTransport;
