const { AuthController } = require("../controller");
const { STATUS_CODES } = require("../util/app-errors");
const { ErrorResponse } = require("../util/error-handler");
const { SetResponse } = require("../util/success-response");

class AuthTransport {
  constructor() {
    this.controller = AuthController;
  }

  ListAccounts = async (req, res, next) => {
    try {
      const result = await this.controller.ListAccount();

      SetResponse(res, STATUS_CODES.OK, result, "OK", null);
    } catch (error) {
      ErrorResponse(error, res);
    }
  };
}

module.exports = new AuthTransport();
