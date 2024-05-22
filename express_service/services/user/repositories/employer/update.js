const { DBError } = require("../../utils/app-errors");
const { EmployerModel } = require("./instance");

const UpdateEmployer = async (employerId, data) => {
  try {
    const user = await EmployerModel.findOne({
      where: {
        id: employerId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    await user.update(data);

    return user ? user.dataValues : user;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = UpdateEmployer;