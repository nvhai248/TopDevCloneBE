const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const FilterCompany = async (req, res, next) => {
  const { keywords, workingPlace, page, limit, cursor } = req.query;

  const conditions = {
    keywords: keywords || '',
    workingPlace: workingPlace,
  };
  try {
    const result = await controller.filterCompanyByConditions(conditions, parseInt(limit), parseInt(page), cursor);
    SetResponse(res, STATUS_CODES.OK, result, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = FilterCompany;
