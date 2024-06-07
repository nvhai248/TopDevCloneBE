const { repository } = require('./instance');
const { COMPANY_STATUS, DBTypeCompany } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const GetCompaniesStatusGrpc = async (call, callback) => {
  try {
    const { hrIds } = call.request;

    const result = [];

    for (let hrId of hrIds) {
      const company = await repository.findCompanyByHrId(hrId);
      result.push({
        hrId: hrId,
        companyId: maskId(company.id, DBTypeCompany),
        status: company.status,
      });
    }

    callback(null, {
      result: result,
    });
  } catch (error) {
    callback(null, {
      result: [],
    });
    console.log(error.message);
  }
};

module.exports = { GetCompaniesStatusGrpc };
