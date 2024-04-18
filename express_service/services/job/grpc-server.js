const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync(process.env.PROTO_PATH);
const {
    UpdateCountApplyGRPC,
} = require("./grpc-server-job/update-count-apply");
const serviceProto = grpc.loadPackageDefinition(packageDefinition);

const grpcJobServer = new grpc.Server();

grpcJobServer.addService(serviceProto.CompanyService.service, {
    UpdateCountApplyGRPC: UpdateCountApplyGRPC,
});

module.exports = grpcJobServer;