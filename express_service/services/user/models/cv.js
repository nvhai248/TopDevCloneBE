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
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listJobApplied: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING, 
    allowNull: false,
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
