const { CompanyController } = require("../../controllers");
const { STATUS_CODES } = require("../../utils/app-errors");
const { SetResponse } = require("../../utils/success-response");

class CompanyTransport {
  constructor() {
    this.controller = new CompanyController();
  }

  test = (req, res) => {
    const data = this.controller.test();
    SetResponse(res, STATUS_CODES.OK, data, "OK", null);
  };
}

module.exports = CompanyTransport;
