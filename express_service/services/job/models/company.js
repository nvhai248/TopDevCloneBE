const { DataTypes } = require('sequelize');
const sequelize = require('../database/pg');
// const sequelize = require('../database/mysql'); // use for local

const Company = sequelize.define(
  'company',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    nationality: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    companySize: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    industry: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    techStack: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    socialMedia: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    addresses: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    benefits: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
      default: null,
    },
    galleries: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    topConcerns: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    products: {
      type: DataTypes.JSON,
      allowNull: true,
      default: null,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    followedCount: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
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
    applicationCount: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  { sequelize },
);

module.exports = Company;
