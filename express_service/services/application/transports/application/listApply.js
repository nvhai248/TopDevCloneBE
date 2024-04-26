const { STATUS_CODES } = require("../../utils/app-errors");
const { ErrorResponse } = require("../../utils/error-handler");
const { SetResponse } = require("../../utils/success-response");
const { controller } = require("./instance");

const ListApply = async (req, res, next) => {
    try {
        const id = req.params.id;

        const listApply = await controller.listApply(id);

        SetResponse(res, STATUS_CODES.OK, listApply, "Successfully", null);

    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = ListApply;
