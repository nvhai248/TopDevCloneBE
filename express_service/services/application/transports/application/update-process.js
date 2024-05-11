const { STATUS_CODES } = require("../../utils/app-errors");
const { ErrorResponse } = require("../../utils/error-handler");
const { SetResponse } = require("../../utils/success-response");
const { controller } = require("./instance");

const UpdateProcessApplication = async (req, res, next) => {
    try {
        const id = req.params.id;

        const data = req.body;

        const updateProcessApplication = await controller.updateProcessApplication(id, data.status);

        SetResponse(res, STATUS_CODES.OK, updateProcessApplication, "Successfully", null);

    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = UpdateProcessApplication;
