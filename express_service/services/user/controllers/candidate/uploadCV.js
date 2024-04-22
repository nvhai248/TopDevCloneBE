const { maskId } = require("../../utils/mask");
const { DBTypeUser } = require("../../utils/const");
const { repository } = require("./instance");

const UploadCV = async (data) => {
    try {
        let cv = await repository.uploadCV(data);
        cv = {
            ...cv,
            id: maskId(cv.id, DBTypeUser),
            user_id: maskId(cv.user_id, DBTypeUser),
        }
        return cv;
    } catch (error) {
        throw error;
    }
};

module.exports = UploadCV;
