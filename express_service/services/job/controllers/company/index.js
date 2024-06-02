const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const ListCompanySlider = require('./slider');
const FilterCompanyByConditions = require('./filter');
const CreateCompanyBySharding = require('./createCompanySharding');
const FindCompanyByIdWithSharding = require('./findCompanySharding');
const FilterCompanyWithSharding = require('./filterCompanySharding');
const Follow = require('./follow');
const GetListByType = require('./getListByType');
const HomePage = require('./homepage');
const UpdateCompaniesStatus = require('./update-status');

class CompanyController {
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
  filterCompanyByConditions = FilterCompanyByConditions;
  // [POST] /companies/create
  createCompanyBySharding = CreateCompanyBySharding;
  //
  findCompanyByIdWithSharding = FindCompanyByIdWithSharding;
  //
  filterCompanyWithSharding = FilterCompanyWithSharding;

  follow = Follow;

  getListByType = GetListByType;

  homepage = HomePage;

  updateStatus = UpdateCompaniesStatus;
}

module.exports = CompanyController;
