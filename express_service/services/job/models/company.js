const { DataTypes } = require('sequelize');
const sequelize = require('../database/mysql');

const CompanyModal = sequelize.define('companies', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companySize: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skills: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  nations: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  benefits: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  fields: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  image: {
    type: DataTypes.STRING,
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
  followedCount: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = CompanyModal;
