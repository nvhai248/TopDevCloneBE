const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');
const isValidToken = require('../../grpc/client');

const ListAllJob = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new Error('Unauthorized');
    }

    token = token.split(' ')[1];

    const { valid } = await isValidToken(token);

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
