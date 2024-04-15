const { DBTypeJob, DBTypeCompany, DBTypeUser } = require("../../utils/const");
const FormatJob = require("../../utils/format-result");
const { unmaskId, maskId } = require("../../utils/mask");
const { repository, companyRepository } = require("./instance");

const FindCompanyById = async (companyId) => {
  try {
    companyId = unmaskId(companyId, DBTypeCompany);

    let job = await repository.findCompanyById(companyId);

    // // implement search company here
    // job.company = await companyRepository.findCompanyById(job.companyId);
    // delete job.companyId;

    // job.id = maskId(job.id, DBTypeJob);
    // job.company.id = maskId(job.company.id, DBTypeCompany);
    // job.createdBy = maskId(job.createdBy, DBTypeUser);

    // // format data return
    // job = FormatJob(job);

    return job;
    // return jobId;
  } catch (error) {
    throw error;
  }
};

module.exports = FindCompanyById;
