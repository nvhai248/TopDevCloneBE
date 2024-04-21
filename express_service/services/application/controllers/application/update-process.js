const { DBTypeApplication, DBTypeJob } = require("../../utils/const");
const { maskId, unmaskId } = require("../../utils/mask");
const { repository } = require("./instance");

const UpdateProcessApplication = async (id) => {
    try {
        const idApply = unmaskId(id, DBTypeApplication)
        const result = await repository.updateProcessApplication(idApply)
        result.jobId = maskId(result.jobId, DBTypeJob);
        result.id = maskId(result.id, DBTypeApplication);
        return result
    } catch (error) {
        throw error;
    }
};

module.exports = UpdateProcessApplication;
