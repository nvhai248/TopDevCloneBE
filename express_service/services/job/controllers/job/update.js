const { BadRequestError } = require('../../utils/app-errors');
const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { unmaskId, maskId } = require('../../utils/mask');
const { FormatJob } = require('../../utils/format-result');

const UpdateJob = async (jobId, data) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);
    const job = await repository.findJobById(jobId);

    if (!job) {
      throw new BadRequestError('Job not found', 'Err repository job layer');
    }

    let result = await repository.updateJobById(jobId, data);

    result.id = maskId(job.id, DBTypeJob);
    result.companyId = maskId(job.companyId, DBTypeCompany);
    result.createdBy = maskId(job.createdBy, DBTypeUser);

    result = FormatJob(result);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = UpdateJob;
