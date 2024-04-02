const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const JobModal = sequelize.define("jobs", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibilities: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  skills: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  extends: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  welfare: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  experienceYearsMin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  experienceYearsMax: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeContract: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  techs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  interviewProcess: {
    type: DataTypes.ARRAY(DataTypes.STRING),
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

module.exports = JobModal;
