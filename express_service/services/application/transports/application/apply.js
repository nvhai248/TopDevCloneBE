const { STATUS_CODES } = require("../../utils/app-errors");
const { ErrorResponse } = require("../../utils/error-handler");
const { SetResponse } = require("../../utils/success-response");
const { controller } = require("./instance");

const ApplyJob = async (req, res, next) => {
  try {
    const data = req.body;
    const applyJob = await controller.applyJob(data);

    if (applyJob.status == "create") {
      SetResponse(res, STATUS_CODES.OK, applyJob.data, "Apply job successfully", null);
    } else {
      SetResponse(res, STATUS_CODES.OK, applyJob.data, "You have ever applied, your information has been successfully updated", null);
    }

  } catch (error) {
    ErrorResponse(error, res);
  }
};

module.exports = ApplyJob;
