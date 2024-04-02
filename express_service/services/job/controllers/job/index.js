const { JobRepository } = require("../../repositories");
const { FindJob } = require("./find");

class JobController {
  findJob = FindJob;
}

module.exports = JobController;
