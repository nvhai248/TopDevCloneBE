const { repository } = require('./instance');
const { DBTypeJob, DBTypeCompany, DBTypeUser } = require('../../utils/const');
const { maskId } = require('../../utils/mask');

const CreateCompany = async (data) => {
    try {
        data.status = parseInt(data.status);
        data.followedCount = parseInt(data.followedCount);
        data.skills = !data.skills
            ? null
            : data.skills.replace(/\s/g, '').split(',');
        const result = await repository.createCompany(data);
        result.id = maskId(result.id, DBTypeCompany);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = CreateCompany;
