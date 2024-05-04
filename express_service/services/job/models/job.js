const { DataTypes } = require('sequelize');
const sequelize = require('../database/pg');
const { JOB_STATUS } = require('../utils/const');
// const sequelize = require('../database/mysql'); // use for local

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
      allowNull: false,
    },
    // salary: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    salaryType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minSalary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxSalary: {
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
    // minExperience: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // maxExperience: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.STRING, // YYYY-MM-DD
      allowNull: false,
    },
    jobType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contractType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // workingPlace: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    interviewProcess: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // followedCount: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 0,
    // },
    // appliedCount: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   defaultValue: 0,
    // },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: JOB_STATUS.PENDING,
    },
  },
  { sequelize },
);

module.exports = Job;
