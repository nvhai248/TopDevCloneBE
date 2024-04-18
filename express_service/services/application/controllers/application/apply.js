const { repository } = require("./instance");
const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { maskId } = require("../../utils/mask");

const ApplyJob = async (data) => {
    try {
        const result = await repository.applyJob(data)

        result.data.jobId = maskId(result.data.jobId, DBTypeJob);
        result.data.id = maskId(result.data.id, DBTypeApplication);

        return { status: result.status, data: result.data };
    } catch (error) {
        throw error;
    }
};

module.exports = ApplyJob;
