const { DBError } = require("../../utils/app-errors");
const { ApplicationModal } = require("./instance");
const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { maskId } = require("../../utils/mask");


// Implement create application information here and export
const CountListApply = async (id) => {
    try {
        const applications = await ApplicationModal.findAll({
            where: {
                jobId: id,
            }
        });
        return applications.length;

    } catch (error) {
        // If an error occurs, throw a DBError
        throw new DBError(error.message, "Something went wrong with count list apply");
    }
};

module.exports = CountListApply;
