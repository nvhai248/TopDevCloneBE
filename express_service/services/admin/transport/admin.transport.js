const { AdminController } = require("../controller");
const { STATUS_CODES } = require("../util/app-errors");
const { ErrorResponse } = require("../util/error-handler");
const { SetResponse } = require("../util/success-response");

class AdminTransport {
  constructor() {
    this.controller = AdminController;
  }

  GetAccountById = async (req, res, next) => {
    try {
      const id = req.query.id;
      if (id) {
        const result = await this.controller.GetAccountById(id);
        SetResponse(res, STATUS_CODES.OK, result, "OK", null);
      } else {
        const result = await this.controller.GetAccountList();
        SetResponse(res, STATUS_CODES.OK, result, "OK", null);
      }
    } catch (error) {
      ErrorResponse(error, res);
    }
  };
}

module.exports = new AdminTransport();
