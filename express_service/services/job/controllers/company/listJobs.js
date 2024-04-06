const { DBTypeJob, DBTypeCompany, DBTypeUser } = require("../../utils/const");
const FormatJob = require("../../utils/format-result");
const { unmaskId, maskId } = require("../../utils/mask");
const { repository } = require("./instance");

const ListJobsByCompanyId = async (companyId) => {
    try {
        companyId = unmaskId(companyId, DBTypeCompany);

        let jobs = await repository.listJobsByCompanyId(companyId);

        jobs = jobs.map(job => ({
            ...job,
            id: maskId(job.id, DBTypeJob),
            companyId: maskId(job.companyId, DBTypeCompany),
            createdBy: maskId(job.createdBy, DBTypeUser)
        }));

        jobs = jobs.map(job => FormatJob(job));

        return jobs;
    } catch (error) {
        throw error;
    }
};

module.exports = ListJobsByCompanyId;
