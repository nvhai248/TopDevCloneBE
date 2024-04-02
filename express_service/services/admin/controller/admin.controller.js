const grpcAuthClient = require("../grpc-auth-client");
const { db } = require("../repository/hard-code");

class AdminController {
  constructor() {
    this.repository = db;
    this.grpcAuthClient = grpcAuthClient;
  }

  GetAccountById = async (id) => {
    try {
      return await new Promise((resolve, reject) => {
        grpcAuthClient.GetAccountById({ id: id }, (error, result) => {
          if (error) {
            console.log(error.message);
            resolve(null);
          } else {
            resolve(result);
          }
        })
      });
    } catch (error) {
      throw error;
    }
  };

  GetAccountList = async () => {
    try {
      return await new Promise((resolve, reject) => {
        grpcAuthClient.GetAccountList({}, (error, result) => {
          if (error) {
            console.log(error.message);
            resolve(null);
          } else {
            resolve(result);
          }
        })
      });
    } catch (error) {
      throw error;
    }
  };
}

module.exports = new AdminController();
