const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const ListCompanySlider = async (req, res, next) => {
  try {
    const jobs = await controller.listCompanySlider();
    SetResponse(res, STATUS_CODES.OK, jobs, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = ListCompanySlider;
