const FindJobById = require("./find");

class JobRepository {
  test = () => {
    return "OK";
  };

  // [GET] /jobs/:id
  findJobById = FindJobById;
}

module.exports = JobRepository;
