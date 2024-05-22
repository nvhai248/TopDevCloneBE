const { DBError } = require("../../utils/app-errors");
const { CVModel } = require("./instance");

const UploadCV = async (data) => {
  try {
    if (data.is_main === true) {
      const cvs = await CVModel.update({ "is_main": false }, {
        where: {
          "user_id": data.user_id
        }
      });
      const cv = await CVModel.create(data);
      return cv ? cv.dataValues : cv;
    }
    const cvs = await CVModel.findAll({
      where: {
        "user_id": data.user_id
      }
    });
    if (cvs.length === 0) {
      data.is_main = true;
    }
    const cv = await CVModel.create(data, {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    });
    return cv ? cv.dataValues : cv;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with user DB");
  }
};

module.exports = UploadCV;