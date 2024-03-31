const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const JOBS_PROTO_PATH = path.join(__dirname, "./buf/jobs.proto");
const PORT = 30043;

var packageDefinition = protoLoader.loadSync(JOBS_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const JobService = grpc.loadPackageDefinition(packageDefinition).JobService;

const client = new JobService(
  `localhost:${PORT}`,
  grpc.credentials.createInsecure()
);

module.exports = client;
