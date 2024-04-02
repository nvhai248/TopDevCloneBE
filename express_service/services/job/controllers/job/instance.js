const { JobRepository } = require("../../repositories");

const repository = new JobRepository();
module.exports = { repository };
