const { STATUS_CODES } = require('../../utils/app-errors');
const { ErrorResponse } = require('../../utils/error-handler');
const { publishMessage } = require('../../utils/pubsub_rabbitmq/publisher');
const { SetResponse } = require('../../utils/success-response');
const { controller } = require('./instance');

const ListJobByConditions = async (req, res, next) => {
  try {
    const { keywords, typeContract, address, type, level, page, limit, cursor } = req.query;

    const conditions = {
      keywords: keywords,
      type: type,
      typeContract: typeContract,
      address: address,
      level: level,
    };

    const result = await controller.listJobByConditions(conditions, parseInt(limit), parseInt(page), cursor);
    SetResponse(res, STATUS_CODES.OK, result, 'OK', null);
  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = ListJobByConditions;
