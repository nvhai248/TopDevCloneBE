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
    // createdBy: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // responsibilities: {
    //   type: DataTypes.JSON,
    //   allowNull: false,
    // },
    // skills: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   set(value) {
    //     this.setDataValue('skills', value.join('|'));
    //   },
    // },
    // extends: {
    //   type: DataTypes.JSON,
    //   allowNull: true,
    // },
    // welfare: {
    //   type: DataTypes.JSON,
    //   allowNull: true,
    // },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    techs: {
      type: DataTypes.TEXT,
      allowNull: true,
      set(value) {
        this.setDataValue('techs', value.join('|'));
      },
    },
    experienceYearsMin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    experienceYearsMax: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    typeContract: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interviewProcess: {
      type: DataTypes.JSON,
      allowNull: true,
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
    // status: {
    //   type: DataTypes.SMALLINT,
    //   allowNull: false,
    //   defaultValue: 0,
    // },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize },
);

module.exports = Job;
