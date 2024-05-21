const { STATUS_CODES } = require("../../../utils/app-errors");
const { ErrorResponse } = require("../../../utils/error-handler");
const { SetResponse } = require("../../../utils/success-response");
const { employerController } = require("../instance");

const ListEmployers = async (req, res, next) => {
    try {
        const employers = await employerController.listEmployers();
        SetResponse(res, STATUS_CODES.OK, employers, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = ListEmployers;
