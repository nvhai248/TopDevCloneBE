const CreateCompany = require('./create');
const FindCompanyById = require('./find');
const ListJobsByCompanyId = require('./listJobs');
const UpdateCompany = require('./update');

class CompanyRepository {
    // [GET] /companies/:id/jobs
    listJobsByCompanyId = ListJobsByCompanyId;

    // [GET] /companies/:id
    findCompanyById = FindCompanyById;

    // [POST] /companies
    createCompany = CreateCompany;

    // [PATCH] /companies/:id
    updateCompany = UpdateCompany;
}

module.exports = CompanyRepository;
