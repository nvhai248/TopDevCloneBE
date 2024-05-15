const { Company1, Company2, Company3 } = require('../../models/companySharding');
const { DBError } = require('../../utils/app-errors');

const FindCompanyByIdWithSharding = async (id) => {
  try {
    const promises = [Company1, Company2, Company3].map((Company) => Company.findOne({ where: { id } }));

    const results = await Promise.all(promises);

    for (const company of results) {
      if (company) {
        const result = company;
        result.dataValues.products = [];
        return result ? result.dataValues : result;
      }
    }
    // If not found in any shard
    throw new Error(`Company with name '${companyName}' not found.`);
  } catch (error) {
    throw new DBError(error.message, 'Something went wrong with company DB');
  }
};

module.exports = FindCompanyByIdWithSharding;
