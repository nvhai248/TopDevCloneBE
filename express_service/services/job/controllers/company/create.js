const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const CreateCompany = async (data) => {
  try {
    // const result = data;
    data.status = parseInt(data.status);
    data.followedCount = parseInt(data.followedCount);
    data.skills = !data.skills ? null : data.skills.split(',').map((benefit) => benefit.trim());
    data.nations = !data.nations ? null : data.nations.split(',').map((benefit) => benefit.trim());
    data.benefits = !data.benefits ? null : data.benefits.split(',').map((benefit) => benefit.trim());
    data.fields = !data.fields ? null : data.fields.split(',').map((benefit) => benefit.trim());
    const result = await repository.createCompany(data);
    result.id = maskId(result.id, DBTypeCompany);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateCompany;
