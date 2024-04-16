const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');

class CompanyController {
    // [GET] /companies/:id/jobs
    listJobsByCompanyId = ListJobsByCompanyId;
    // [POST] /companies
    createCompany = CreateCompany;
    // [GET] /companies/:id
    findCompanyById = FindCompanyById;
    // [PATCH] /companies/:id
    updateCompany = UpdateCompany;
}

module.exports = CompanyController;
