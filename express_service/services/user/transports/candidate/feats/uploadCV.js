const { STATUS_CODES } = require("../../../utils/app-errors");
const { ErrorResponse } = require("../../../utils/error-handler");
const { SetResponse } = require("../../../utils/success-response");
const { candidateController } = require("../instance");

const UploadCV = async (req, res, next) => {
    try {
        let data = req.body;
        data.is_main = data.is_main ? data.is_main : true;
        data.changeable = false;
        data.archive = false;
        const CV = await candidateController.uploadCV(data);
        SetResponse(res, STATUS_CODES.OK, CV, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = UploadCV;
