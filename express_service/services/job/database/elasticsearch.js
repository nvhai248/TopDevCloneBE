const { Client } = require('@elastic/elasticsearch');
const ELASTIC_CONFIG = require('../configs/elasticsearch');

const elasticClient = new Client(ELASTIC_CONFIG);

elasticClient.ping((error) => {
  if (error) {
    console.error('Elasticsearch cluster is down!');
  } else {
    console.log('Connected to Elasticsearch');
  }
});

module.exports = elasticClient;
