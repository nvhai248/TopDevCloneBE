const { DBError } = require('../../utils/app-errors');
const { CompanyModal } = require('./instance');

// Implement create job information here and export
const CreateCompany = async (data) => {
    try {
        console.log('data from repository', data);
        // Create a new company with the provided data
        const newCompany = await CompanyModal.create(data);

        // Return the newly created company data
        return newCompany.dataValues;
    } catch (error) {
        // If an error occurs, throw a DBError
        throw new DBError(
            error.message,
            'Something went wrong with company creation',
        );
    }
};

module.exports = CreateCompany;
