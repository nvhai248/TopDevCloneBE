const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { GRPC_COMPANY_SERVER } = require("./configs");
const packageDefinition = protoLoader.loadSync(
  "../proto/company-service.proto"
);
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

const grpcCompanyClient = new serviceProto.CompanyService(
  GRPC_COMPANY_SERVER,
  grpc.credentials.createInsecure()
);

module.exports = grpcCompanyClient;
