const { db } = require("../repository/hard-code");

class CompanyController {
  constructor() {
    this.repository = db;
  }

  ListCompany = async () => {
    try {
      return this.repository;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new CompanyController();
