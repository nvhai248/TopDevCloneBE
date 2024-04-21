const { DBError } = require("../../utils/app-errors");
const { CVModel } = require("./instance");

const listCVs = async (user_id) => {
  try {
    const CVs = await CVModel.findAll({
      where: {
        user_id: user_id
      }
    });
    return CVs ? CVs.map(user => user.dataValues) : CVs;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = listCVs;
