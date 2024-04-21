const adminRouter = require("./admin");
const candidateRouter = require('./candidate');

module.exports = (app) => {
  app.use("/admin", adminRouter);
  app.use('/', candidateRouter);
};
