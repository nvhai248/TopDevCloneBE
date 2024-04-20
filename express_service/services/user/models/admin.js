const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const AdminModel = sequelize.define("admins", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  }
});

module.exports = AdminModel;
