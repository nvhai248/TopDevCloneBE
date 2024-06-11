const { DBTypeCompany } = require('../../utils/const');
const { FormatCompany } = require('../../utils/format-result');
const { unmaskId, maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const ListFollowOfCandidate = async (userId) => {
  try {
    const follows = await repository.findAllFollowByUserId(userId);

    const result = [];

    for (let item of follows) {
      const company = await repository.findCompanyById(item.companyId);

      result.push(
        FormatCompany({
          ...company,
          id: maskId(company.id, DBTypeCompany),
        }),
      );
    }

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = ListFollowOfCandidate;
