const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const CVModel = sequelize.define("cvs", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  changeable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  CVdata: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_main: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  archive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = CVModel;
