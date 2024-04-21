const { BadRequestError } = require("../../utils/app-errors");
const { repository } = require("./instance");
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require("../../utils/const");
const { unmaskId, maskId } = require("../../utils/mask");

const UpdateJob = async (jobId, data) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);
    const job = await repository.findJobById(jobId);

    if (!job) {
      throw new BadRequestError("Job not found", "Err repository job layer");
    }

    let result = await repository.updateJobById(jobId, data);

    result.id = maskId(job.id, DBTypeJob);
    result.companyId = maskId(job.companyId, DBTypeCompany);
    result.createdBy = maskId(job.createdBy, DBTypeUser);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = UpdateJob;
