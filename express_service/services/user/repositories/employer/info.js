const { DBError } = require("../../utils/app-errors");
const { EmployerModel } = require("./instance");

const EmployerInfo = async (id) => {
  try {
    const user = await EmployerModel.findOne({
        where: {
            id: id,
        }
    });

    return user ? user.dataValues : user;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = EmployerInfo;