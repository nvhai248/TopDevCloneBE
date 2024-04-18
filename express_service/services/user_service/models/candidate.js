const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const CandidateModel = sequelize.define("candidates", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  yoe: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status_profile: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "newstar",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  summary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skills : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  experiences: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  educations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  projects: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  languages: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  interests: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ref: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  activities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  certificates: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  additional: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cover_letter: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  willing_to_work: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
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
});

module.exports = CandidateModel;
