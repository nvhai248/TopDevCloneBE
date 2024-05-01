const { DBError } = require("../../utils/app-errors");
const { ApplicationModal } = require("./instance");
const { maskId } = require("../../utils/mask");


// Implement create application information here and export
const DetailApply = async (id) => {
    try {
        const application = await ApplicationModal.findOne({
            where: { id: id }
        });

        return application.dataValues;

    } catch (error) {
        // If an error occurs, throw a DBError
        throw new DBError(error.message, "Something went wrong with get detail apply");
    }
};

module.exports = DetailApply;
