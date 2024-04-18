const ApplyJob = require("./apply");
const ListApply = require("./listApply");
class ApplicationRepository {
  // [POST]
  applyJob = ApplyJob;

  // [GET] List applications by job id
  listApply = ListApply;
}

module.exports = ApplicationRepository;
