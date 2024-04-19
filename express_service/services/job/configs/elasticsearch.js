const ELASTIC_CONFIG = {
  node: process.env.ES_HOST,
  auth: {
    username: process.env.ES_USERNAME,
    password: process.env.ES_PW,
  },
};

module.exports = ELASTIC_CONFIG;
