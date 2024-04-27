const { DBError } = require('../../utils/app-errors');
const { Company } = require('./instance');

const FilterCompanyByConditions = async (searchConditions, limit, offset) => {
  try {
    const companies = await Company.findAll({
      where: searchConditions,
      limit: limit,
      offset: offset,
    });

    return companies ? companies.map((company) => company.dataValues) : null;
  } catch (error) {
    throw new DBError(error.message, 'Something went wrong with company DB');
  }
};

module.exports = FilterCompanyByConditions;
