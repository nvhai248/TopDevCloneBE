const { Client } = require('@elastic/elasticsearch');
const ELASTIC_CONFIG = require('../configs/elasticsearch');

const elasticClient = new Client(ELASTIC_CONFIG);

module.exports = elasticClient;
