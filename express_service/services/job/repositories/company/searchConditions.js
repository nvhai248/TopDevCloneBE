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
  if (conditions.address) {
    searchConditions[Op.and].push({ address: { [Op.like]: `%${conditions.address}%` } });
  }

  if (conditions.status) {
    searchConditions[Op.and].push({ status: { [Op.in]: [conditions.status] } });
  }

  return searchConditions;
};

module.exports = GetSearchConditions;
