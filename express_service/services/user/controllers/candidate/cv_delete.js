const { unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");
const { BadRequestError } = require('../../utils/app-errors');

const DeleteCV = async (id) => {
    try {
        let decodedId;
        try {
            decodedId = unmaskId(id, DBTypeUser);
        } catch (error) {
            throw new BadRequestError("Not valid id!", "Require correct id!");
        }
        const deletedCV = await repository.deleteCV(decodedId);
        if (deletedCV === 0) throw new BadRequestError("CV not found", "CV may not exist!");
        return deletedCV;
    } catch (error) {
        throw error;
    }
};

module.exports = DeleteCV;