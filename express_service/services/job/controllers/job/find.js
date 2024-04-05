const { DBTypeJob, DBTypeCompany, DBTypeUser } = require("../../utils/const");
const FormatJob = require("../../utils/format-result");
const { unmaskId, maskId } = require("../../utils/mask");
const { repository } = require("./instance");

const FindJob = async (jobId) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);

    let job = await repository.findJobById(jobId);

    job.id = maskId(job.id, DBTypeJob);
    job.companyId = maskId(job.companyId, DBTypeCompany);
    job.createdBy = maskId(job.createdBy, DBTypeUser);

    // implement search company here
    // TODO

    // format data return
    job = FormatJob(job);

    return job;
  } catch (error) {
    throw error;
  }
};

module.exports = FindJob;
