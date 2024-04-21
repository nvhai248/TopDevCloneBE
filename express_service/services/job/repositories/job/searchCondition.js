const { Op } = require('sequelize');

const GetSearchConditions = (conditions) => {
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

  return searchConditions;
};

module.exports = GetSearchConditions;
