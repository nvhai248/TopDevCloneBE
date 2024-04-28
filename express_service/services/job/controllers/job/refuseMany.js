const { repository } = require('./instance');
const { JOB_STATUS_DELETED, DBTypeJob } = require('../../utils/const');
const sequelize = require('../../database/pg');
const { unmaskId } = require('../../utils/mask');

const RefuseMany = async (ids) => {
  let transaction;
  try {
    const data = { status: JOB_STATUS_DELETED };

    transaction = await sequelize.transaction();

    for (let id of ids) {
      id = unmaskId(id, DBTypeJob);
      await repository.updateJobById(parseInt(id), data);
    }

    transaction.commit();

    return true;
  } catch (error) {
    if (transaction) await transaction.rollback();
    throw error;
  }
};

module.exports = RefuseMany;
