const { BadRequestError } = require('../../utils/app-errors');
const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser, JOB_STATUS_ACTIVE, JOB_STATUS_DELETED } = require('../../utils/const');
const { unmaskId, maskId } = require('../../utils/mask');
const { FormatJob } = require('../../utils/format-result');

const ApproveJob = async (jobId) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);
    const job = await repository.findJobById(jobId);

    if (!job) {
      throw new BadRequestError('Job not found', 'Err repository job layer');
    }

    if (job.status == JOB_STATUS_DELETED) {
      throw new BadRequestError('Already deleted this job', 'JobDeleted');
    }

    const data = { status: JOB_STATUS_ACTIVE };

    let result = await repository.updateJobById(jobId, data);

    result.id = maskId(job.id, DBTypeJob);
    result.companyId = maskId(job.companyId, DBTypeCompany);
    result.createdBy = maskId(job.createdBy, DBTypeUser);

    return FormatJob(result);
  } catch (error) {
    throw error;
  }
};

module.exports = ApproveJob;
