const { STATUS_CODES, AppErr, BadRequestError } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const UpdateCompany = async (req, res, next) => {
  const data = req.body;
  try {
    const { hrId, ...newCompany } = data;
    if (!hrId) return next(new BadRequestError('Miss field', 'hr Id is required'));
    const company = await controller.updateCompany(hrId, newCompany);
    SetResponse(res, STATUS_CODES.OK, company, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = UpdateCompany;
