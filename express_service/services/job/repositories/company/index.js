const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');
const ListCompanySlider = require('./slider');
const GetSearchConditions = require('./searchConditions');
const CountCompanyByConditions = require('./count');
const FilterCompanyByConditions = require('./filter');
const CreateCompanyWithSharding = require('./createCompanySharding');
const FindCompanyByIdWithSharding = require('./findCompanySharding');
const FilterCompanyWithSharding = require('./filterCompanySharding');
const GetSearchConditionListJob = require('./searchConditionListJob');
const IncreaseFollowedCount = require('./increaseFollowCount');

class CompanyRepository {
  // [GET] /companies/:id/jobs
  listJobsByCompanyId = ListJobsByCompanyId;

  // [GET] /companies/:id
  findCompanyById = FindCompanyById;

  // [POST] /companies
  createCompany = CreateCompany;

  // [PATCH] /companies/:id
  updateCompany = UpdateCompany;

  // [GET] /companies/slider
  listCompanySlider = ListCompanySlider;

  getSearchCondition = GetSearchConditions;

  countCompanyByConditions = CountCompanyByConditions;

  filterCompanyByConditions = FilterCompanyByConditions;

  // [POST] /companies/create
  createCompanyWithSharding = CreateCompanyWithSharding;
  //
  findCompanyByIdWithSharding = FindCompanyByIdWithSharding;
  //
  filterCompanyWithSharding = FilterCompanyWithSharding;

  getSearchConditionListJob = GetSearchConditionListJob;

  // follow company
  increaseFollowedCount = IncreaseFollowedCount;
}

module.exports = CompanyRepository;
