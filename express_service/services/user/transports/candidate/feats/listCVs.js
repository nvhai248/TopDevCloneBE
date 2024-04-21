const { STATUS_CODES } = require("../../../utils/app-errors");
const { ErrorResponse } = require("../../../utils/error-handler");
const { SetResponse } = require("../../../utils/success-response");
const { candidateController } = require("../instance");

const ListCVs = async (req, res, next) => {
    try {
        const id = req.params.id;
        const CVs = await candidateController.listCVbyUserId(id);
        SetResponse(res, STATUS_CODES.OK, CVs, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = ListCVs;
