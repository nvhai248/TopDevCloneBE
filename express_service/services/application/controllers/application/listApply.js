const { DBTypeJob } = require("../../utils/const");
const { unmaskId } = require("../../utils/mask");
const { repository } = require("./instance");

const ListApply = async (id) => {
    try {
        const jobId = unmaskId(id, DBTypeJob)
        const result = await repository.listApply(jobId)
        return result
    } catch (error) {
        throw error;
    }
};

module.exports = ListApply;
