const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const ListFollowOfCandidate = async (req, res, next) => {
  const userId = req?.user?.id;
  try {
    const result = await controller.listFollowOfCandidate(userId);
    SetResponse(res, STATUS_CODES.OK, result, 'OK', null);
  } catch (error) {
    console.log(error);
    ErrorResponse(error, res);
  }
};

module.exports = ListFollowOfCandidate;
