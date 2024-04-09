const CreateJob = require("./create");
const FindJob = require("./find");
const RefuseJob = require("./refuse");
const UpdateJob = require("./update");
const ApproveJob = require("./approve");

class JobTransport {
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
