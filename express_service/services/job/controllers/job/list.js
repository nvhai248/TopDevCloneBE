const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { FormatJob } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const ListJobByConditions = async (conditions, limit, page, cursor) => {
    try {
        limit = limit || 20;
        page = page || 1;
        const offset = cursor
            ? unmaskId(cursor, DBTypeProduct)
            : (page - 1) * limit;

        if (!conditions.keywords) {
            conditions.keywords = [];
        } else if (!Array.isArray(conditions.keywords)) {
            conditions.keywords = new Array(conditions.keywords);
        }

        const total = await repository.countJobByConditions(conditions);

        let jobs = await repository.listJobByConditions(
            conditions,
            limit,
            offset,
        );

        jobs = jobs.map((job) => ({
            ...job,
            id: maskId(job.id, DBTypeJob),
            companyId: maskId(job.companyId, DBTypeCompany),
            createdBy: maskId(job.createdBy, DBTypeUser),
        }));

        return {
            jobs: jobs.map((job) => FormatJob(job)),
            paging: {
                limit: limit,
                page: page,
                total: total,
                fakeCursor: total === 0 ? null : maskId(offset, DBTypeJob),
                nextCursor:
                    total === 0 || offset + jobs.length >= total
                        ? null
                        : maskId(offset + jobs.length, DBTypeJob),
            },
        };
    } catch (error) {
        throw error;
    }
};

module.exports = ListJobByConditions;
