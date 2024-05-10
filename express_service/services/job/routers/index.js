const companyRouter = require("./company");
const jobRouter = require("./job");

module.exports = (app) => {
  app.use("/", (req, res, next) => {
    console.log(`Request to ${req.method} ${req.originalUrl}`);
    next();
  });
  app.use("/", jobRouter);
  app.use("/companies", companyRouter);
};
