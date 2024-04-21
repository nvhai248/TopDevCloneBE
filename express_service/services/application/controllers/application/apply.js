const { repository } = require("./instance");
const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { maskId } = require("../../utils/mask");
const grpcJobClient = require("../../grpc-job-client");

const ApplyJob = async (data) => {
    try {
        const result = await repository.applyJob(data)

        const jobId = result.data.jobId

        // await new Promise((resolve, reject) => {
        //     grpcJobClient.UpdateCountApplyGRPC({ jobId }, (error, result1) => {
        //         if (error) {
        //             console.log(error.message)
        //             resolve(null);
        //         } else {
        //             resolve(result1);
        //         }
        //     });
        // });

        result.data.jobId = maskId(result.data.jobId, DBTypeJob);
        result.data.id = maskId(result.data.id, DBTypeApplication);

        return { status: result.status, data: result.data };
    } catch (error) {
        throw error;
    }
};

module.exports = ApplyJob;
