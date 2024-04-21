const { DBError } = require("../../utils/app-errors");
const { EmployerModel } = require("./instance");

const listEmployers = async () => {
  try {
    const users = await EmployerModel.findAll();
    return users ? users.map(user => user.dataValues) : users;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = listEmployers;
