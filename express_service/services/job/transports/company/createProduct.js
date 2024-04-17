const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');
const uploader = require('../../utils/uploader');

const CreateProduct = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
    if (!req.file) {
      data.image = 'https://res.cloudinary.com/dqtcvuae8/image/upload/v1700311688/avatar/ttlmi6rg8pu4m7d4ao6o.png';
    } else {
      const result = await uploader(req.file);
      data.image = result && result.url;
    }
    const product = await controller.createProduct(id, data);
    SetResponse(res, STATUS_CODES.OK, product, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = CreateProduct;
