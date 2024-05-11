const { DBTypeJob } = require("../../utils/const");
const { maskId, unmaskId } = require("../../utils/mask");
const { repository } = require("./instance");
const grpcJobClient = require("../../grpc-job-client")

const ListApply = async (id, limit, page) => {
    try {
        limit = limit || 20;
        page = page || 1;
        const jobId = unmaskId(id, DBTypeJob)

        const result = await repository.listApply(jobId, limit, page)
        for (const res of result) {
            idJob = unmaskId(res.jobId, DBTypeJob)
            const infoJob = await new Promise((resolve, reject) => {
                grpcJobClient.GetJobInformation({ id: idJob }, (error, res) => {
                    if (error) {
                        console.log(error.message);
                        resolve(null);
                    } else {
                        resolve(res);
                    }
                });
            });

            res.jobDetail = {
                jobId: res.jobId,
                title: infoJob.title,
                level: infoJob.level,
                jobType: infoJob.jobType,
                endDate: infoJob.endDate
            };
        }


        const total = await repository.countListApply(jobId);

        return {
            data: result,
            paging: {
                limit: limit,
                page: page,
                total: total,
            },
        }
    } catch (error) {
        throw error;
    }
};

module.exports = ListApply;
