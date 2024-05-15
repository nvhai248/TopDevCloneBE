const { DBError } = require('../../utils/app-errors');
const { getShard } = require('../../utils/getShard');
const { Op } = require('sequelize');

const FilterCompanyWithSharding = async (name) => {
  try {
    const Company = getShard(name);
    const companies = await Company.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
    const results = companies.map((res) => {
      const companyData = res.get({ plain: true });
      companyData.products = [];
      return companyData;
    });
    if (results.length === 0) {
      throw new Error(`Company with name '${name}' not found.`);
    }
    return results; // Return the modified results
  } catch (error) {
    throw new DBError(error.message, 'Something went wrong with company DB');
  }
};

module.exports = FilterCompanyWithSharding;
