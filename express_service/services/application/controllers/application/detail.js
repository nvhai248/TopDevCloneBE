const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { unmaskId, maskId } = require("../../utils/mask");
const { repository } = require("./instance");

const DetailApply = async (id) => {
    try {
        const idApply = unmaskId(id, DBTypeApplication)
        const result = await repository.detailApply(idApply)

        result.id = maskId(result.id, DBTypeApplication);
        result.jobId = maskId(result.jobId, DBTypeJob);
        return result
    } catch (error) {
        throw error;
    }
};

module.exports = DetailApply;
