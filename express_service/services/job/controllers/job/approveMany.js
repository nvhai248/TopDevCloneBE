const { repository } = require('./instance');
const { JOB_STATUS_ACTIVE, DBTypeJob } = require('../../utils/const');
const sequelize = require('../../database/pg');
const { unmaskId } = require('../../utils/mask');

const ApproveMany = async (ids) => {
  let transaction;
  try {
    const data = { status: JOB_STATUS_ACTIVE };

    transaction = await sequelize.transaction();

    for (let id of ids) {
      id = unmaskId(id, DBTypeJob);
      await repository.updateJobById(parseInt(id), data);
    }

    transaction.commit();

    return true;
  } catch (error) {
    // Rollback the transaction if there is an error
    if (transaction) await transaction.rollback();

    throw error;
  }
};

module.exports = ApproveMany;
