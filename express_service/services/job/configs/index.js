require("dotenv").config();

const PORT = 5004;
const GRPC_COMPANY_SERVER = process.env.GRPC_COMPANY_SERVER;

module.exports = {
  PORT,
  GRPC_COMPANY_SERVER,
};
