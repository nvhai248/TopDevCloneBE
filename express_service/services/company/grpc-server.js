const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync(
  "../proto/company-service.proto"
);
const {
  GetCompanyInformation,
} = require("./grpc-server-function/get-company-grpc");
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

const grpcCompanyServer = new grpc.Server();

grpcCompanyServer.addService(serviceProto.CompanyService.service, {
  GetCompanyInformation: GetCompanyInformation,
});

module.exports = grpcCompanyServer;
