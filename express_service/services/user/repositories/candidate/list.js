const { DBError } = require("../../utils/app-errors");
const { CandidateModel } = require("./instance");

const listCandidates = async () => {
  try {
    const users = await CandidateModel.findAll();
    return users ? users.map(user => user.dataValues) : users;
  } catch (error) {
    console.log(error);
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = listCandidates;
