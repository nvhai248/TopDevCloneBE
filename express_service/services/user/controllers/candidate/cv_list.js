const { maskId, unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const ListCVs = async (user_id, limit, offset) => {
    try {
        const decodedId = unmaskId(user_id, DBTypeUser);
        let cvs = await repository.listCVbyUserId(decodedId, limit, offset);
        cvs = cvs.map(cv => ({
            ...cv,
            id: maskId(cv.id, DBTypeUser),
            user_id: maskId(cv.user_id, DBTypeUser)
        }))

        return cvs;
    } catch (error) {
        throw error;
    }
};

module.exports = ListCVs;