const { DBError } = require("../../utils/app-errors");
const { CVModel } = require("./instance");

const UploadCV = async (data) => {
  try {
    // /// If the CV is main, then set all other CVs to not main
    // if (data.is_main === true) {
    //   await CVModel.update({ "is_main": false }, {
    //     where: {
    //       "user_id": data.user_id
    //     }
    //   });
    //   const cv = await CVModel.create(data);
    //   return cv !== null ? cv.dataValues : cv;
    // }

    // /// If the CV is not main, then check if there is any main CV
    // const cvs = await CVModel.findAll({
    //   where: {
    //     "user_id": data.user_id
    //   }
    // });
    // if (cvs.length === 0) {
    //   data.is_main = true;
    // }

    /// Create the CV
    const cv = await CVModel.create(data, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    return cv !== null ? cv.dataValues : cv;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = UploadCV;