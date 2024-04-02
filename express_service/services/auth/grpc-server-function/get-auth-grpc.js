const { db } = require("../repository/hard-code");

const GetAccountById = (call, callback) => {
  try {
    const id = call.request.id;
    const account = db.find((account) => account.id === id);
    callback(null, account);
  } catch (error) {
    console.log(error.message);
  }
};

const GetAccountList = (call, callback) => {
  try {
    callback(null, {accounts: db});
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { GetAccountById, GetAccountList };
