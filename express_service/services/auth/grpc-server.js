require("dotenv").config();
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync('../proto/auth-service.proto');
const {
  GetAccountById,
  GetAccountList,
} = require("./grpc-server-function/get-auth-grpc");
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

const grpcAuthServer = new grpc.Server();

grpcAuthServer.addService(serviceProto.AuthService.service, {
  GetAccountById: GetAccountById,
  GetAccountList: GetAccountList,
});

module.exports = grpcAuthServer;
