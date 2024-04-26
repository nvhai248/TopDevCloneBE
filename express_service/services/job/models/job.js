const { DataTypes } = require('sequelize');
const sequelize = require('../database/pg');

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
    jobDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    technicals: {
      type: DataTypes.TEXT,
      allowNull: true,
      set(value) {
        this.setDataValue('technicals', value.join('|'));
      },
    },
    minExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contractType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workingPlace: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interviewProcess: {
      type: DataTypes.TEXT,
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
  },
  { sequelize },
);

module.exports = Job;
