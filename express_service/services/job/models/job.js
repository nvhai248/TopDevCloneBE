const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const Job = sequelize.define(
  'job',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
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
      type: DataTypes.JSON,
      allowNull: false,
    },
    skills: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    extends: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    welfare: {
      type: DataTypes.JSON,
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
      type: DataTypes.JSON,
      allowNull: true,
    },
    interviewProcess: {
      type: DataTypes.JSON,
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
  },
  { sequelize },
);

module.exports = Job;
