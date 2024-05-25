const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { GRPC_JOB_SERVER, PORT } = require('../configs/index.js');
const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../proto/job-service.proto'));
const proto = grpc.loadPackageDefinition(packageDefinition);
// const { createJob, getJob, getJobs, updateJob, deleteJob } = require('../controllers/job.js');

const createCompany = async (call, callback) => {
  const userId = call.request.userId;
  const name = call.request.companyName;
  const phoneNumber = call.request.phoneNumber;

  const company = {
    userId,
    name,
    phoneNumber,
  };

  const response = await fetch(`http://localhost:${PORT}/companies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(company),
  });

  const data = await response.json();

  if (!response.ok) {
    return callback(null, { success: false, message: data.message || 'Failed to create company' });
  }

  return callback(null, { success: true, message: 'Company created successfully' });
};

const startGrpcServer = () => {
  const server = new grpc.Server();

  server.addService(proto.JobService.service, {
    createCompany,
  });

  server.bindAsync(`${GRPC_JOB_SERVER}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Server bind failed:', err);
    } else {
      console.log('Job service (gRPC) is running on port', port);
    }
  });
};

module.exports = startGrpcServer;
