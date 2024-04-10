const { DBError } = require("../../utils/app-errors");
const { CandidateModel } = require("./instance");

const UpdateInfo = async (id, data) => {
  try {
    const user = await CandidateModel.findOne({
        where: {
            id: id,
        }
    });
    user.update(data);

    return user ? user.dataValues : user;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = UpdateInfo;