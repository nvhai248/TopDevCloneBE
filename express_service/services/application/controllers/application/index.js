const ApplyJob = require("./apply");
const ListApply = require("./listApply");
class ApplicationController {
  //POST
  applyJob = ApplyJob;

  //GET
  listApply = ListApply
}

module.exports = ApplicationController;
