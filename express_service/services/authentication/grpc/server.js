const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { GRPC_AUTH_SERVER, PORT } = require('../configuration/app.js');
const packageDefinition = protoLoader.loadSync(path.join(__dirname, '../../proto/auth-service.proto'));
const proto = grpc.loadPackageDefinition(packageDefinition);
// const keycloak = require('../services/keycloak.js');

const verifyToken = async (token, role) => {
  try {
    const response = await fetch(`http://localhost:${PORT}/${role}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return false;
  }
};

const isValid = async (call, callback) => {
  const token = call.request.token;
  const role = call.request.role;

  if (!token) {
    console.error('Token is missing in request');
    return callback(null, { valid: false });
  }

  if (!role) {
    console.error('Role is missing in request');
    return callback(null, { valid: false });
  }

  try {
    const isValid = await verifyToken(token, role);
    return callback(null, { valid: isValid });
  } catch (error) {
    console.error('Error in isValid function:', error);
    return callback({
      code: grpc.status.INTERNAL,
      message: 'Internal server error',
    });
  }
};

const startGrpcServer = () => {
  const server = new grpc.Server();

  server.addService(proto.AuthService.service, {
    isValid,
  });

  server.bindAsync(`${GRPC_AUTH_SERVER}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Server bind failed:', err);
    } else {
      console.log('Auth service (gRPC) is running on port', port);
    }
  });
};

module.exports = startGrpcServer;
