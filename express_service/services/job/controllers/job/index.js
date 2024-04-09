const CreateJob = require("./create");
const FindJob = require("./find");
const UpdateJob = require("./update");
const RefuseJob = require("./refuse");
const ApproveJob = require("./approve");

class JobController {
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
}

module.exports = JobController;
