const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const JobListModel = sequelize.define('jobs', {
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
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const value = this.getDataValue('responsibilities');
      return value ? value.split(',') : [];
    },
    set(value) {
      this.setDataValue('responsibilities', value.join(','));
    },
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const value = this.getDataValue('skills');
      return value ? value.split(',') : [];
    },
    set(value) {
      this.setDataValue('skills', value.join(','));
    },
  },
  extends: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  welfare: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const value = this.getDataValue('welfare');
      return value ? value.split(',') : [];
    },
    set(value) {
      this.setDataValue('welfare', value.join(','));
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
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const value = this.getDataValue('techs');
      return value ? value.split(',') : [];
    },
    set(value) {
      this.setDataValue('techs', value.join(','));
    },
  },
  interviewProcess: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const value = this.getDataValue('interviewProcess');
      return value ? value.split(',') : [];
    },
    set(value) {
      this.setDataValue('interviewProcess', value.join(','));
    },
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

module.exports = JobListModel;
