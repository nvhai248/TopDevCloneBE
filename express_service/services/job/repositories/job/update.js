const { DBError } = require("../../utils/app-errors");
const { JobModal } = require("./instance");

// Implement update job information here and export
const UpdateJobInfo = async (jobId, data) => {
  try {
    // Find the job by ID
    const job = await JobModal.findOne({ where: { id: jobId } });

    // Update job information with the provided data
    await job.update(data);

    // Return updated job data
    return job.dataValues;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, "Something went wrong with job DB");
  }
};

module.exports = UpdateJobInfo;
