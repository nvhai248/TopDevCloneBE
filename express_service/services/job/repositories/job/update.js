const { DBError } = require('../../utils/app-errors');
const { Job } = require('./instance');

// Implement update job information here and export
const UpdateJobInfo = async (jobId, data, transaction = null) => {
  let job;

  try {
    // Find the job by ID within the transaction if provided
    job = await Job.findOne({ where: { id: jobId }, transaction });

    // Update job information with the provided data
    await job.update(data, { transaction });

    // Return updated job data
    return job.dataValues;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with job DB');
  }
};

module.exports = UpdateJobInfo;
