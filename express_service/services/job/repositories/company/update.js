const { DBError } = require('../../utils/app-errors');
const { CompanyModal } = require('./instance');

// Implement create job information here and export
const UpdateCompany = async (id, data) => {
    try {
        // Find the company by ID
        const company = await CompanyModal.findOne({ where: { id } });

        // Update company information with the provided data
        await company.update(data);

        // Return updated company data
        return company.dataValues;
    } catch (error) {
        // If an error occurs, throw a DBError
        throw new DBError(error.message, 'Something went wrong with company DB');
    }
};

module.exports = UpdateCompany;
