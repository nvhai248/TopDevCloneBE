const ELASTIC_CONFIG = {
  node: process.env.ES_HOST,
  auth: {
    username: process.env.ES_USERNAME,
    password: process.env.ES_PW,
  },
  tls: {
    ca: fs.readFileSync('http-cert.crt'),
    rejectUnauthorized: false,
  },
};

module.exports = ELASTIC_CONFIG;
