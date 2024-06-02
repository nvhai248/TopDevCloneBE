const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { GRPC_JOB_SERVER, PORT } = require('../configs/index.js');
const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../proto/job-service.proto'));
const proto = grpc.loadPackageDefinition(packageDefinition);
const { GetJobInformation } = require('../grpc-server-function/job/get-job-grpc.js');
const { UpdateApplyCountGrpc } = require('../grpc-server-function/job/update-apply-count-grpc.js');

const CreateCompanyGrpc = async (call, callback) => {
  const hrId = call.request.hrId;
  const name = call.request.name;
  const phoneNumber = call.request.phoneNumber;

  const company = {
    hrId,
    name,
    phoneNumber,
  };

  try {
    const response = await fetch(`http://localhost:${PORT}/companies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(company),
    });

    const data = await response.json();

    if (!response.ok) {
      return callback(null, { companyId: '', isOk: false });
    }

    return callback(null, { companyId: data.companyId, isOk: true });
  } catch (error) {
    return callback(null, { companyId: '', isOk: false });
  }
};

const startGrpcServer = () => {
  const server = new grpc.Server();

  server.addService(proto.JobService.service, {
    CreateCompanyGrpc: CreateCompanyGrpc,
    GetJobInformation: GetJobInformation,
    UpdateApplyCountGrpc: UpdateApplyCountGrpc,
  });

  server.bindAsync(`${GRPC_JOB_SERVER}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Server bind failed:', err);
    } else {
      console.log('Job service (gRPC) is running on port', port);
      server.start();
    }
  });
};

module.exports = startGrpcServer;
