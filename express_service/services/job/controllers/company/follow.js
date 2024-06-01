const { repository } = require('./instance');
const { DBTypeCompany } = require('../../utils/const');
const { unmaskId } = require('../../utils/mask');

const Follow = async (cpnId) => {
  try {
    cpnId = unmaskId(cpnId, DBTypeCompany);

    let result = await repository.increaseFollowedCount(cpnId);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = Follow;
