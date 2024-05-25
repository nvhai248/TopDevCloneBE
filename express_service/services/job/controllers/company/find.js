const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { FormatCompany } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository, companyRepository } = require('./instance');

const FindCompanyById = async (companyId) => {
  try {
    const maskedCompanyId = unmaskId(companyId, DBTypeCompany);
    let company = await repository.findCompanyById(maskedCompanyId);

    await repository.updateCompany(companyId, { viewedCount: company.viewedCount + 1 });

    company.id = maskId(company.id, DBTypeCompany);
    return company;
  } catch (error) {
    throw error;
  }
};

module.exports = FindCompanyById;
