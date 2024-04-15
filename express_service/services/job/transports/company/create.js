const { STATUS_CODES } = require("../../utils/app-errors");
const { ErrorResponse } = require("../../utils/error-handler");
const { SetResponse } = require("../../utils/success-response");
const { controller } = require("./instance");

const CreateCompany = async (req, res, next) => {
    const data = req.body;
    try {
        const company = await controller.createCompany(data);
        SetResponse(res, STATUS_CODES.OK, company, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = CreateCompany;
