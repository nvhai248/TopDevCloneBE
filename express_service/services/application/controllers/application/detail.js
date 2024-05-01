const { DBTypeJob, DBTypeApplication } = require("../../utils/const");
const { unmaskId, maskId } = require("../../utils/mask");
const { repository } = require("./instance");
const grpcJobClient = require("../../grpc-job-client")

const DetailApply = async (id) => {
    try {
        const idApply = unmaskId(id, DBTypeApplication)
        const result = await repository.detailApply(idApply)

        const infoJob = await new Promise((resolve, reject) => {
            grpcJobClient.GetJobInformation({ id: result.jobId }, (error, result) => {
                if (error) {
                    console.log(error.message);
                    resolve(null);
                } else {
                    resolve(result);
                }
            });
        });

        result.jobDetail = {
            jobId: maskId(result.jobId, DBTypeJob),
            title: infoJob.title,
        };


        result.id = maskId(result.id, DBTypeApplication);
        result.jobId = maskId(result.jobId, DBTypeJob);
        return result
    } catch (error) {
        throw error;
    }
};

module.exports = DetailApply;
