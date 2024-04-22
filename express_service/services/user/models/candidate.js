const { DataTypes } = require("sequelize");
const sequelize = require("../database/mypg");

const CandidateModel = sequelize.define("candidates", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  avatar: {
    type: DataTypes.TEXT,
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
    type: DataTypes.DATEONLY,
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
    type: DataTypes.TEXT,
    allowNull: true,
  },
  skills: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  experiences: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  educations: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  projects: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  languages: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  interests: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ref: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  activities: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  certificates: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  additional: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  cover_letter: {
    type: DataTypes.TEXT,
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
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = CandidateModel;
