const { Op } = require('sequelize');
const { DBError } = require('../../utils/app-errors');
const { JobListModel } = require('./instance');

const CountJobByConditions = async (conditions) => {
  try {
    let searchConditions = {};

    const keywordQueries = conditions.keywords.flatMap((keyword) => [
      { title: { [Op.like]: `%${keyword}%` } },
      { skills: { [Op.like]: `%${keyword}%` } },
      { techs: { [Op.like]: `%${keyword}%` } },
    ]);

    if (keywordQueries.length) {
      searchConditions[Op.or] = keywordQueries;
    }

    if (conditions.level) {
      searchConditions.level = { [Op.like]: `%${conditions.level}%` };
    }
    if (conditions.type) {
      searchConditions.type = { [Op.like]: `%${conditions.type}%` };
    }

    if (conditions.typeContract) {
      searchConditions.typeContract = {
        [Op.like]: `%${conditions.typeContract}%`,
      };
    }

    if (conditions.status) {
      searchConditions.status = {
        [Op.in]: [parseInt(conditions.status)],
      };
    }

    /* if (conditions.address) {
      searchConditions.address = { [Op.like]: `%${conditions.address}%` };
    } */

    const jobCount = await JobListModel.count({
      where: searchConditions,
    });

    return jobCount;
  } catch (error) {
    console.log(error);
    throw new DBError(error.message, 'Something went wrong with job DB');
  }
};

module.exports = CountJobByConditions;
