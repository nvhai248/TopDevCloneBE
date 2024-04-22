const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const UpdateInfo = async (id, data) => {
    try {
        const decodedId = unmaskId(id, DBTypeUser);
        let user = await repository.updateCandidate(decodedId, data);
        user = {
            ...user,
            id: id,
        }
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = UpdateInfo;
