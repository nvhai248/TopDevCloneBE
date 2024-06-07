const { repository } = require('./instance');
const { COMPANY_STATUS, DBTypeCompany } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const GetCompaniesStatusGrpc = async (call, callback) => {
  try {
    const { hrIds } = call.request;
    console.log('hrIds<<<', hrIds);
    const result = [];

    for (let hrId of hrIds) {
      try {
        const company = await repository.findCompanyByHrId(hrId);
        console.log('company<<<', company);
        result.push({
          hrId: hrId,
          companyId: maskId(company.id, DBTypeCompany),
          status: company.status,
        });
      } catch (error) {
        console.log('error.message', error.message);
      }
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
