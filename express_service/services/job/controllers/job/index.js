const CreateJob = require('./create');
const FindJob = require('./find');
const UpdateJob = require('./update');
const ListJobByConditions = require('./list');
const ListAllJob = require('./listAll');
const UpdateStatus = require('./updateStatus');

class JobController {
  // [GET] /jobs?keywords=???&level=???&type=???&typeContract=???&address=???&page=??&limit=??&cursor=???&keywords=???
  listJobByConditions = ListJobByConditions;

  // [GET] /jobs/:id
  findJob = FindJob;

  //[PATCH] /jobs/:id
  updateJob = UpdateJob;

  // [POST] /jobs
  createJob = CreateJob;

  // [GET] /jobs/admin
  listAllJob = ListAllJob;

  // [PATCH] /jobs/change-status
  updateStatus = UpdateStatus;
}

module.exports = JobController;
