const { DBError } = require("../../utils/app-errors");
const { CandidateModel } = require("./instance");

const CandidateInfo = async (id) => {
  try {
    const user = await CandidateModel.findOne({
        where: {
            id: id,
        }
    });

    return user ? user.dataValues : user;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = CandidateInfo;