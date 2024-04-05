const CreateJob = require("./create");
const FindJobById = require("./find");
const UpdateJobInfo = require("./update");

class JobRepository {
  test = () => {
    return "OK";
  };

  // [GET] /jobs/:id
  findJobById = FindJobById;

  // [PATCH] /jobs/:id
  updateJobById = UpdateJobInfo;

  // [POST] /jobs
  createJob = CreateJob;
}

module.exports = JobRepository;
