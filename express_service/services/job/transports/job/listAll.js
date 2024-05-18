const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');
const checkAuth = require('../../utils/auth');
// const isValidToken = require('../../grpc/client'); // for grpc

const ListAllJob = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new Error('Unauthorized');
    }

    token = token.split(' ')[1];

    // const { valid } = await isValidToken(token); // for grpc

    const valid = await checkAuth(token, 'admin');

    if (!valid) {
      throw new Error('Invalid token');
    }

    const result = await controller.listAllJob();

    SetResponse(res, STATUS_CODES.OK, result, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = ListAllJob;
