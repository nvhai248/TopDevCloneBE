const CreateJob = require('./create');
const FindJob = require('./find');
const UpdateJob = require('./update');
const RefuseJob = require('./refuse');
const ApproveJob = require('./approve');
const ListJobByConditions = require('./list');
const ListAllJob = require('./listAll');
const RefuseMany = require('./refuseMany');
const ApproveMany = require('./approveMany');

class JobController {
  // [GET] /jobs?keywords=???&level=???&type=???&typeContract=???&address=???&page=??&limit=??&cursor=???&keywords=???
  listJobByConditions = ListJobByConditions;

  // [GET] /jobs/:id
  findJob = FindJob;

  //[PATCH] /jobs/:id
  updateJob = UpdateJob;

  // [POST] /jobs
  createJob = CreateJob;

  // [DELETE] /jobs/:id/refuse
  refuseJob = RefuseJob;

  // [PATCH] /jobs/:id/approve
  approveJob = ApproveJob;

  // [GET] /jobs/admin
  listAllJob = ListAllJob;

  // [PATCH] /jobs/approveMany
  refuseMany = RefuseMany;

  //[PATCH] jobs/refuseMany
  approveMany = ApproveMany;
}

module.exports = JobController;
