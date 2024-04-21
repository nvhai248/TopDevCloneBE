const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');
const uploader = require('../../utils/uploader');

const CreateProduct = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
    const product = await controller.createProduct(id, data);
    SetResponse(res, STATUS_CODES.OK, product, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = CreateProduct;
