const CreateJob = require("./create");
const FindJob = require("./find");
const UpdateJob = require("./update");

class JobTransport {
  // [GET] /jobs/:id
  findJob = FindJob;

  // [PATCH] /jobs/:id
  updateJob = UpdateJob;

  //[POST] /jobs
  createJob = CreateJob;
}

module.exports = JobTransport;
