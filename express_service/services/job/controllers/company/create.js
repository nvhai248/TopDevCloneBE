const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const jsonify = (a) => {
  return !a ? null : JSON.parse(JSON.stringify(a.split(',').map((e) => e.trim())));
};

const CreateCompany = async (data) => {
  try {
    const result = await repository.createCompany(data);
    result.id = maskId(result.id, DBTypeCompany);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = CreateCompany;
