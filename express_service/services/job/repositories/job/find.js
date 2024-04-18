const { DBError } = require("../../utils/app-errors");
const { JobModal } = require("./instance");

// implement find job here and export
const FindJobById = async (jobId) => {
  try {
    const job = await JobModal.findOne({ where: { id: jobId } });
    return job ? job.dataValues : job;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with job DB");
  }
};

module.exports = FindJobById;
