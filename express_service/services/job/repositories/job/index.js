const CreateJob = require('./create');
const FindJobById = require('./find');
const ListJobByConditions = require('./list');
const CountJobByConditions = require('./count');
const UpdateJobInfo = require('./update');
const ListAllJob = require('./listAll');

class JobRepository {
  // [GET] /jobs?keywords=???&level=???&type=???&typeContract=???&address=???&page=??&limit=??&cursor=???&keywords=???
  listJobByConditions = ListJobByConditions;

  countJobByConditions = CountJobByConditions;

  // [GET] /jobs/:id
  findJobById = FindJobById;

  // [PATCH] /jobs/:id
  updateJobById = UpdateJobInfo;

  // [POST] /jobs
  createJob = CreateJob;

  // [GET] /jobs/admin
  listAllJob = ListAllJob;
}

module.exports = JobRepository;
