const ApplyJob = require("./apply");
const ListApply = require("./listApply");
const ListApplyOfUser = require("./listApplyOfUser");
const CountListApply = require("./countListApply")
const DetailApply = require("./detail")
const UpdateProcessApplication = require("./update-process");

class ApplicationRepository {
  applyJob = ApplyJob;
  listApply = ListApply;
  countListApply = CountListApply;
  updateProcessApplication = UpdateProcessApplication;
  detailApply = DetailApply;
  listApplyOfUser = ListApplyOfUser;
}

module.exports = ApplicationRepository;
