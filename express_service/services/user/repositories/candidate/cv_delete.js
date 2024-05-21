const { DBError } = require("../../utils/app-errors");
const { CVModel } = require("./instance");

const deleteCV = async (id) => {
  try {
    const deletedCV = await CVModel.update(
      {
        archive: true
      },
      {
        where: {
          id: id
        }
      }
    );

    return deletedCV ? deletedCV[0] : deletedCV;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = deleteCV;
