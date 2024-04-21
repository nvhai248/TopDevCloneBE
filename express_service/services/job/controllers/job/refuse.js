const { BadRequestError } = require('../../utils/app-errors');
const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser, JOB_STATUS_DELETED, JOB_STATUS_ACTIVE } = require('../../utils/const');
const { unmaskId, maskId } = require('../../utils/mask');

const RefuseJob = async (jobId) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);
    const job = await repository.findJobById(jobId);

    if (!job) {
      throw new BadRequestError('Job not found', 'Err repository job layer');
    }

    if (job.status == JOB_STATUS_ACTIVE) {
      throw new BadRequestError('Already approved this job', 'JobApproved');
    }

    const data = { status: JOB_STATUS_DELETED };

    let result = await repository.updateJobById(jobId, data);

    result.id = maskId(job.id, DBTypeJob);
    result.companyId = maskId(job.companyId, DBTypeCompany);
    result.createdBy = maskId(job.createdBy, DBTypeUser);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = RefuseJob;
