const { DBError } = require("../../utils/app-errors");
const { JobModel } = require("./instance");

// Implement list jobs by company and export
const ListJobsByCompanyId = async (companyId) => {
    try {
        const jobs = await JobModel.findAll({ where: { companyId: companyId } });
        return jobs ? jobs.map(job => job.dataValues) : jobs;
    } catch (error) {
        throw new DBError(error.message, "Something went wrong with job DB");
    }
};

module.exports = ListJobsByCompanyId;
