const { DBError } = require("../../utils/app-errors");
const { ApplicationModal } = require("./instance");
const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { maskId } = require("../../utils/mask");


// Implement create application information here and export
const ListApply = async (id) => {
    try {
        const applications = await ApplicationModal.find({
            where: { jobId: id }
        });

        // Kiểm tra xem có bản ghi nào được trả về không
        if (!applications || applications.length === 0) {
            // Nếu không có, trả về một mảng rỗng
            return [];
        }

        // Mask jobId cho từng application trong danh sách
        const maskedApplications = applications.map(application => ({
            ...application.toJSON(),
            jobId: maskId(application.jobId, DBTypeJob),
            id: maskId(application.id, DBTypeApplication)
        }));

        return maskedApplications;

    } catch (error) {
        // If an error occurs, throw a DBError
        throw new DBError(error.message, "Something went wrong with get list apply");
    }
};

module.exports = ListApply;
