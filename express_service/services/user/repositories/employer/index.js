const ListEmployers = require("./list");
const EmployerInfo = require("./info");
const UpdateEmployer = require('./update');

class AdminRepository {
    // [GET] /admin/employers
    listEmployers = ListEmployers;
  
    // [GET] /admin/employers/:id
    employerInfo = EmployerInfo;

    // [PATCH] /admin/employers/:id
    updateEmployer = UpdateEmployer;
}

module.exports = AdminRepository;
