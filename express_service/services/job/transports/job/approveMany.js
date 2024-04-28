const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const ApproveMany = async (req, res, next) => {
  const ids = req.body;

  try {
    const job = await controller.approveMany(ids);
    SetResponse(res, STATUS_CODES.OK, job, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = ApproveMany;
