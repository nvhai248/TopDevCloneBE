const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");
const FormatCandidate = require("../../utils/format-result");

const UpdateInfo = async (id, data) => {
    try {
        const fieldsToCheck = ['skills', 'experience', 'education', 'projects', 'extends'];
        for (const key in data) {
            if (fieldsToCheck.includes(key)) {
                data[key] = JSON.stringify(data[key])
            }
        }

        const decodedId = unmaskId(id, DBTypeUser);
        let user = await repository.updateCandidate(decodedId, data);
        user = {
            ...user,
            id: id,
        }

        user = FormatCandidate(user);
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = UpdateInfo;
