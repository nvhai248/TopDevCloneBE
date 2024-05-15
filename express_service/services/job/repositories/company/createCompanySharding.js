const { DBError } = require('../../utils/app-errors');
const { getShard } = require('../../utils/getShard');

// Implement create job information here and export
const CreateCompanyWithSharding = async (data) => {
  try {
    // handle create company with sharding data
    const Company = getShard(data.name);

    // Create a new company with the provided data
    const newCompany = await Company.create(data);

    // Return the newly created company data
    return newCompany.dataValues;
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, 'Something went wrong with company creation');
  }
};

module.exports = CreateCompanyWithSharding;
