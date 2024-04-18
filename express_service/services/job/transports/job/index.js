const CreateJob = require("./create");
const FindJob = require("./find");
const RefuseJob = require("./refuse");
const UpdateJob = require("./update");
const ApproveJob = require("./approve");
const ListJobByConditions = require("./list");

class JobTransport {
  // [GET] /jobs?keywords=???&level=???&type=???&typeContract=???&address=???&page=??&limit=??&cursor=???&keywords=???
  listJobByConditions = ListJobByConditions;

  // [GET] /jobs/:id
  findJob = FindJob;

  // [PATCH] /jobs/:id
  updateJob = UpdateJob;

  //[POST] /jobs
  createJob = CreateJob;

  // [PATCH] /jobs/:id/approve
  approveJob = ApproveJob;

  // [DELETE] /jobs/:id/refuse
  refuseJob = RefuseJob;
}

module.exports = JobTransport;
