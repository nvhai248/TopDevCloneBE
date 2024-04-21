const ApplyJob = require("./apply");
const ListApply = require("./listApply");
const UpdateProcessApplication = require("./update-process")
class ApplicationController {
  //POST
  applyJob = ApplyJob;

  //GET
  listApply = ListApply;

  updateProcessApplication = UpdateProcessApplication
}

module.exports = ApplicationController;
