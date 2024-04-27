const { DBTypeJob, DBTypeCompany } = require('../../utils/const');
const { FormatCompany } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const FilterCompanyByConditions = async (conditions, ordering, limit, page, cursor) => {
  try {
    limit = limit || 20;
    page = page || 1;

    const offset = cursor ? unmaskId(cursor, DBTypeCompany) : (page - 1) * limit;

    conditions.keywords = conditions.keywords !== '' ? conditions.keywords.split('-') : [];

    // generate search conditions query from conditions
    const searchConditions = repository.getSearchCondition(conditions);

    const total = await repository.countCompanyByConditions(searchConditions);

    let companies = await repository.filterCompanyByConditions(searchConditions, limit, offset);

    return {
      companies: companies.map((company) => {
        company.id = maskId(company.id, DBTypeJob);
        return FormatCompany(company);
      }),
      paging: {
        limit: limit,
        page: page,
        total: total,
        fakeCursor: total === 0 ? null : maskId(offset, DBTypeCompany),
        nextCursor:
          total === 0 || offset + companies.length >= total ? null : maskId(offset + companies.length, DBTypeCompany),
      },
    };
  } catch (error) {
    throw error;
  }
};

module.exports = FilterCompanyByConditions;
