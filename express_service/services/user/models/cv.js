const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../database/mypg");

const CVModel = sequelize.define("cvs", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  changeable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  cv_data: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  url: {
    type: DataTypes.TEXT, 
    allowNull: true,
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
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = CVModel;
