const jobRouter = require("./job.router");

module.exports = (app) => {
  app.use("/", jobRouter);
};
