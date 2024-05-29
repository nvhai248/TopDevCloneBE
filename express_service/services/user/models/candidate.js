const { DataTypes } = require("sequelize");
const sequelize = require("../database/mypg");

const CandidateModel = sequelize.define("candidates", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    jobPosition: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dob:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    yearsOfExperience: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    socialLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    github: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    technicals: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    softSkills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    workExperience: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    education: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    projects: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    languages: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    hobbies: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
    },
    activities: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    otherInformations: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
    },
    myCVs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
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
