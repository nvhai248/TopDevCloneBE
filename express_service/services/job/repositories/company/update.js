const { DBError } = require('../../utils/app-errors');
const { DBTypeCompany } = require('../../utils/const');
const { unmaskId } = require('../../utils/mask');
const { Company } = require('./instance');

// Implement create job information here and export
const UpdateCompany = async (id, data) => {
  try {
    const companyId = unmaskId(id, DBTypeCompany);
    // Find the company by ID
    const company = await Company.findOne({ where: { id: companyId } });
    // Update company information with the provided data
    await company.update(data);

    // Return updated company data
    return company.dataValues;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with update company DB');
  }
};

module.exports = UpdateCompany;
