const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const UpdateInfo = async (id, data) => {
    try {
        let decodedId;
        try {
            decodedId = unmaskId(id, DBTypeUser);
        } catch (error) {
            throw new BadRequestError("Not valid id!", "Require correct id!");
        }
        const user = await repository.updateCandidate(decodedId, data);
        if (user === null)  throw new BadRequestError("Not found!", "User not found!");
        const formatUser = {
            ...user,
            id: id,
        }
        return formatUser;
    } catch (error) {
        throw error;
    }
};

module.exports = UpdateInfo;
