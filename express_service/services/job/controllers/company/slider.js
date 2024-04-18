const { DBTypeCompany } = require('../../utils/const');
const FormatCompany = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const ListCompanySlider = async () => {
  try {
    let companies = await repository.listCompanySlider();

    companies = companies.map((company) => ({
      ...company,
      id: maskId(company.id, DBTypeCompany),
    }));

    return formattedCompanies;
  } catch (error) {
    throw error;
  }
};

module.exports = ListCompanySlider;
