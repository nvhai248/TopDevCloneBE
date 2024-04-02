const fs = require("fs");

require("dotenv").config();

const PORT = 5005;
const GRPC_COMPANY_SERVER = process.env.GRPC_COMPANY_SERVER;

console.log(GRPC_COMPANY_SERVER);

module.exports = {
  PORT,
  GRPC_COMPANY_SERVER,
};
