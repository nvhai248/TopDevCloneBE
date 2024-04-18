const JobModal = require('../models/job');

const UpdateCountApplyGRPC = (call, callback) => {
    try {
        const id = call.request.id;

        JobModal.findOne({ where: { id } })
            .then(job => {
                if (!job) {
                    throw new Error('Job not found');
                }

                job.appliedCount += 1;

                return job.save();
            })
            .then(updatedJob => {
                callback(null, updatedJob);
            })
            .catch(error => {
                console.error(error.message);
                callback(error);
            });
    } catch (error) {
        console.error(error.message);
        callback(error);
    }
}

module.exports = { UpdateCountApplyGRPC };