const { DBTypeJob } = require("../../utils/const");
const { unmaskId } = require("../../utils/mask");
const { repository } = require("./instance");

const ListApply = async (id, limit, page) => {
    try {
        limit = limit || 20;
        page = page || 1;
        const jobId = unmaskId(id, DBTypeJob)

        const result = await repository.listApply(jobId, limit, page)

        const total = await repository.countListApply(jobId);

        return {
            data: result,
            paging: {
                limit: limit,
                page: page,
                total: total,
            },
        }
    } catch (error) {
        throw error;
    }
};

module.exports = ListApply;
