const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { FormatJob } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository, companyRepository } = require('./instance');

const ListJobByConditions = async (conditions, ordering, limit, page, cursor) => {
  try {
    limit = limit || 20;
    page = page || 1;
    const offset = cursor ? unmaskId(cursor, DBTypeJob) : (page - 1) * limit;

    conditions.keywords = conditions.keywords !== '' ? conditions.keywords.split('-') : [];
    conditions.contractTypes = conditions.contractTypes !== '' ? conditions.contractTypes.split('-') : [];
    conditions.levels = conditions.levels !== '' ? conditions.levels.split('-') : [];

    // generate search conditions query from conditions
    const searchConditions = repository.getSearchCondition(conditions);

    const total = await repository.countJobByConditions(searchConditions);

    let jobs = await repository.listJobByConditions(searchConditions, ordering, limit, offset);

    const ids = [...new Set(jobs.map((job) => job.companyId))];
    var companies = new Map();

    for (const id of ids) {
      const result = await companyRepository.findCompanyById(id);

      if (result) {
        companies[id] = result;
        result.id = maskId(result.id, DBTypeCompany);
      }
    }

    for (let i = 0; i < jobs.length; i++) {
      jobs[i].company = companies[jobs[i].companyId];
    }

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
        nextCursor: total === 0 || offset + jobs.length >= total ? null : maskId(offset + jobs.length, DBTypeJob),
      },
    };
  } catch (error) {
    throw error;
  }
};

module.exports = ListJobByConditions;
