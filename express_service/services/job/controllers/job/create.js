const { repository } = require("./instance");
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require("../../utils/const");
const { maskId } = require("../../utils/mask");

const CreateJob = async (data) => {
  try {
    const result = await repository.createJob(data);

    result.id = maskId(result.id, DBTypeJob);
    result.companyId = maskId(result.companyId, DBTypeCompany);
    result.createdBy = maskId(result.createdBy, DBTypeUser);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateJob;
