const ApplyJob = require("./apply");
const ListApply = require("./listApply");

class ApplicationTransport {
  //[POST] 
  applyJob = ApplyJob;

  //GET
  listApply = ListApply;
}

module.exports = ApplicationTransport;
