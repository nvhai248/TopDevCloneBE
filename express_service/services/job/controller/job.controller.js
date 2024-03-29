const grpcCompanyClient = require("../grpc-company-client");
const { db } = require("../repository/hard-code");

class JobController {
  constructor() {
    this.repository = db;
    this.grpcCompanyClient = grpcCompanyClient;
  }

  ListJob = async () => {
    try {
      let jobs = this.repository;
      const ids = [...new Set(jobs.map((job) => job.companyId))];
      var companies = new Map();

      for (const id of ids) {
        const result = await new Promise((resolve, reject) => {
          grpcCompanyClient.GetCompanyInformation({ id }, (error, result) => {
            if (error) {
              console.log(error.message);
              resolve(null);
            } else {
              resolve(result);
            }
          });
        });

        if (result) {
          companies[id] = result;
        }
      }

      for (let i = 0; i < jobs.length; i++) {
        jobs[i].company = companies[jobs[i].companyId];
        delete jobs[i].companyId;
      }

      return jobs;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new JobController();
