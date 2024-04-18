const { maskId, unmaskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const MainCVs = async (user_id) => {
    try {
        const decodedId = unmaskId(user_id, DBTypeUser);
        let cvs = await repository.listCVbyUserId(decodedId);
        cvs = cvs.map(cv => ({
            ...cv,
            id: maskId(cv.id, DBTypeUser),
            user_id: maskId(cv.user_id, DBTypeUser)
        }))

        const mainCV = cvs.find(cv => {
            return cv.is_main == true;
        })

        return mainCV ? mainCV : cvs;
    } catch (error) {
        throw error;
    }
};

module.exports = MainCVs;