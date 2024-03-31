var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const path = require("path");

const JOBS_MOCK_DATA = require("../draft/jobs");

const JOBS_PROTO_PATH = path.join(__dirname, "./buf/jobs.proto");
const PORT = 30043;

const packageDefinition = protoLoader.loadSync(JOBS_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const jobsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

// Service implement
server.addService(jobsProto.JobService.service, {
  getJobsByCompanyId: (call, callback) => {
    const jobs = JOBS_MOCK_DATA;
    const companyID = call.request.companyId;
    console.log("COMPANY ID FROM job_service/proto/server.js:", companyID);

    callback(null, { jobs });
  },
});

// Run server
server.bindAsync(
  `127.0.0.1:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) console.log("Run grpc server failed");
    console.log(`Grpc server listening on: http://127.0.0.1:${port}`);
  }
);
