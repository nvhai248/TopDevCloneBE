const fs = require("fs");

require("dotenv").config();

const PORT = 5005;
const GRPC_COMPANY_SERVER = 50051;

console.log(GRPC_COMPANY_SERVER);

module.exports = {
  PORT,
  GRPC_COMPANY_SERVER,
};
