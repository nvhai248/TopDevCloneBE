const { DBError } = require("../../utils/app-errors");
const { ApplicationModal } = require("./instance");


// Implement create application information here and export
const ApplyJob = async (data) => {
  try {
    const newApply = await ApplicationModal.create(data);
    return { status: "create", data: newApply }
    // let application = await ApplicationModal.findOne({
    //   where: {
    //     jobId: data.jobId,
    //     email: data.email
    //   }
    // });

    // if (application) {
    //   application.update(data)
    //   return { status: "update", data: application.dataValues }
    // } else {

    // }
  } catch (error) {
    // If an error occurs, throw a DBError
    throw new DBError(error.message, "Something went wrong with apply job");
  }
};

module.exports = ApplyJob;
