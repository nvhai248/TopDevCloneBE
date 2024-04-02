const { db } = require("../repository/hard-code");

class AuthController {
  constructor() {
    this.repository = db;
  }

  ListAccount = async () => {
    try {
      return this.repository;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new AuthController();
