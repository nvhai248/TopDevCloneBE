const ApplyJob = require("./apply");
const ListApply = require("./listApply");
const UpdateProcessApplication = require("./update-process");

class ApplicationRepository {
  // [POST]
  applyJob = ApplyJob;

  // [GET] List applications by job id
  listApply = ListApply;

  updateProcessApplication = UpdateProcessApplication
}

module.exports = ApplicationRepository;
