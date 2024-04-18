const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const UpdateCompany = async (id, data) => {
  try {
    data.status = data.status ? parseInt(data.status) : undefined;
    data.followedCount = data.followedCount ? parseInt(data.followedCount) : undefined;
    data.skills = !data.skills ? null : data.skills.split(',').map((benefit) => benefit.trim());
    data.nations = !data.nations ? null : data.nations.split(',').map((benefit) => benefit.trim());
    data.benefits = !data.benefits ? null : data.benefits.split(',').map((benefit) => benefit.trim());
    data.fields = !data.fields ? null : data.fields.split(',').map((benefit) => benefit.trim());
    const result = await repository.updateCompany(id, data);
    result.id = maskId(result.id, DBTypeCompany);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = UpdateCompany;
