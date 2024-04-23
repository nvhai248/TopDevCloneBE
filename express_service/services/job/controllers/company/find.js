const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { FormatJob, FormatCompany } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository, companyRepository } = require('./instance');

const FindCompanyById = async (companyId) => {
  try {
    const maskedCompanyId = unmaskId(companyId, DBTypeCompany);
    let company = await repository.findCompanyById(maskedCompanyId);
    company.id = companyId;
    company = FormatCompany(company);
    return company;
  } catch (error) {
    throw error;
  }
};

module.exports = FindCompanyById;
