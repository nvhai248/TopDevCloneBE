const companyRouter = require("./company.router");

module.exports = (app) => {
  app.use("/", companyRouter);
};
