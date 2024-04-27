const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const CreateProduct = require('./createProduct');
const ListCompanySlider = require('./slider');
const GetSearchConditions = require('./searchConditions');
const CountCompanyByConditions = require('./count');
const FilterCompanyByConditions = require('./filter');

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

  getSearchCondition = GetSearchConditions;

  countCompanyByConditions = CountCompanyByConditions;

  filterCompanyByConditions = FilterCompanyByConditions;
}

module.exports = CompanyRepository;
