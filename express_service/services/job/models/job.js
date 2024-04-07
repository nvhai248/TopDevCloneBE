const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const JobModal = sequelize.define("jobs", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
    allowNull: true,
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
    allowNull: true,
  },
  welfare: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  experienceYearsMin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  experienceYearsMax: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  typeContract: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  techs: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  interviewProcess: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  followedCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  appliedCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0,
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
