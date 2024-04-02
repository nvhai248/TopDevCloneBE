const { repository } = require("./instance");

const FindJob = async (jobId) => {
  try {
    const job = await repository.findJobById(jobId);
    return job;
  } catch (error) {
    throw error;
  }
};

module.exports = { FindJob };
