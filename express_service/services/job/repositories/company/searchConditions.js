const { Op } = require('sequelize');

const GetSearchConditions = (conditions) => {
  let searchConditions = {};

  // Initialize an array for the 'AND' conditions
  searchConditions[Op.and] = [];

  // Keyword queries
  const keywordQueries = [];
  conditions.keywords.forEach((keyword) => {
    keywordQueries.push({ name: { [Op.like]: `%${keyword}%` } });
  });

  // Add keyword queries to 'AND' conditions
  if (keywordQueries.length) {
    searchConditions[Op.and].push({ [Op.or]: keywordQueries });
  }

  // Working place query
  if (conditions.workingPlace) {
    searchConditions[Op.and].push({ address: { [Op.like]: `%${conditions.workingPlace}%` } });
  }

  return searchConditions;
};

module.exports = GetSearchConditions;
