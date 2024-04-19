const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const jsonify = (a) => {
  return !a ? null : JSON.parse(JSON.stringify(a.split(',').map((e) => e.trim())));
};

const CreateCompany = async (data) => {
  try {
    // const result = data;
    data.status = parseInt(data.status);
    data.followedCount = parseInt(data.followedCount);
    data.skills = !data.skills ? null : jsonify(data.skills);
    data.nations = !data.nations ? null : jsonify(data.nations);
    data.benefits = !data.benefits ? null : jsonify(data.benefits);
    data.fields = !data.fields ? null : jsonify(data.fields);
    data.images = !data.images ? null : jsonify(data.images);
    const result = await repository.createCompany(data);
    result.id = maskId(result.id, DBTypeCompany);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateCompany;
