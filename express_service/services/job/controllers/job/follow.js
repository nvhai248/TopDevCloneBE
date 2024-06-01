const { repository } = require('./instance');
const { DBTypeJob } = require('../../utils/const');
const { unmaskId } = require('../../utils/mask');

const Follow = async (jobId, data) => {
  try {
    jobId = unmaskId(jobId, DBTypeJob);

    let result = await repository.increaseFollowedCount(jobId);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = Follow;
