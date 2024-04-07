const { CompanyModal } = require("./instance");
const { JobModel } = require("./instance");

const FindCompanyById = async (id) => {
  try {
    const result = await CompanyModal.findOne({ where: { id: id } });
    return result ? result.dataValues : result;
  } catch (error) {
    throw new DBError(error.message, "Something went wrong with job DB");
  }
};

module.exports = FindCompanyById;
