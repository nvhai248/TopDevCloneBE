const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { GRPC_AUTH_SERVER } = require("./configs");
const packageDefinition = protoLoader.loadSync(
  '../proto/auth-service.proto'
);
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

const grpcAuthClient = new serviceProto.AuthService(
  `localhost:${GRPC_AUTH_SERVER}`,
  grpc.credentials.createInsecure()
);

module.exports = grpcAuthClient;
