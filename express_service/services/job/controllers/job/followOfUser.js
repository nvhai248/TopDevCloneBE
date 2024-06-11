const { DBTypeJob, DBTypeCompany } = require('../../utils/const');
const { FormatJob } = require('../../utils/format-result');
const { maskId } = require('../../utils/mask');
const { repository } = require('./instance');

const ListFollowOfCandidate = async (userId) => {
  try {
    const follows = await repository.findAllFollowByUserId(userId);

    const result = [];

    for (let item of follows) {
      const job = await repository.findJobById(item.jobId);

      result.push(
        FormatJob({
          ...job,
          id: maskId(job.id, DBTypeJob),
          companyId: maskId(job.companyId, DBTypeCompany),
        }),
      );
    }

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = ListFollowOfCandidate;
