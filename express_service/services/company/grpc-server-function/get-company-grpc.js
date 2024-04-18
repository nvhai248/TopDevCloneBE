const { db } = require("../repository/hard-code");

const GetCompanyInformation = (call, callback) => {
  try {
    const id = call.request.id;
    const company = db.find((company) => company.id === id);
    callback(null, company);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { GetCompanyInformation };
