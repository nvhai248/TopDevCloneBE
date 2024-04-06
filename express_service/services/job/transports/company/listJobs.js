const { STATUS_CODES } = require("../../utils/app-errors");
const { ErrorResponse } = require("../../utils/error-handler");
const { SetResponse } = require("../../utils/success-response");
const { controller } = require("./instance");

const ListJobsByCompanyId = async (req, res, next) => {
    try {
        const id = req.params.id;

        const jobs = await controller.listJobsByCompanyId(id);

        // const jobsArray = Array.isArray(jobs) ? jobs : [jobs];

        SetResponse(res, STATUS_CODES.OK, jobs, "OK", null);
    } catch (error) {
        ErrorResponse(error, res);
    }
};

module.exports = ListJobsByCompanyId;
