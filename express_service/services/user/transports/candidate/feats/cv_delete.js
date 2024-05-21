const { STATUS_CODES } = require("../../../utils/app-errors");
const { ErrorResponse } = require("../../../utils/error-handler");
const { SetResponse } = require("../../../utils/success-response");
const { candidateController } = require("../instance");

const DeleteCV = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedCV = await candidateController.deleteCV(id);
        SetResponse(res, STATUS_CODES.OK, null, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = DeleteCV;
