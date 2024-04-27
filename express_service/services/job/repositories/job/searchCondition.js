const { Op } = require('sequelize');

const GetSearchConditions = (conditions) => {
  let searchConditions = {};

  // Initialize an array for the 'AND' conditions
  searchConditions[Op.and] = [];

  // Keyword queries
  const keywordQueries = [];
  conditions.keywords.forEach((keyword) => {
    keywordQueries.push({ title: { [Op.like]: `%${keyword}%` } });
    keywordQueries.push({ technicals: { [Op.like]: `%${keyword}%` } });
  });

  // Add keyword queries to 'AND' conditions

  if (keywordQueries.length) {
    searchConditions[Op.and].push({ [Op.or]: keywordQueries });
  }

  // Level queries
  const levelQueries = [];
  conditions.levels.forEach((level) => {
    levelQueries.push({ level: { [Op.like]: `%${level}%` } });
  });

  // Add level queries to 'AND' conditions
  if (levelQueries.length) {
    searchConditions[Op.and].push({ [Op.or]: levelQueries });
  }

  // Contract type queries
  const contractTypeQueries = [];
  conditions.contractTypes.forEach((contractType) => {
    contractTypeQueries.push({ contractType: { [Op.like]: `%${contractType}%` } });
  });

  // Add contract type queries to 'AND' conditions
  if (contractTypeQueries.length) {
    searchConditions[Op.and].push({ [Op.or]: contractTypeQueries });
  }

  // Status query
  if (conditions.status) {
    searchConditions.status = {
      [Op.in]: [parseInt(conditions.status)],
    };
  }

  // Working place query
  if (conditions.workingPlace) {
    searchConditions[Op.and].push({ workingPlace: { [Op.like]: `%${conditions.workingPlace}%` } });
  }

  return searchConditions;
};

module.exports = GetSearchConditions;
