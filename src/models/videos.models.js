const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Courses = require("./courses.models");


const Videos = db.define(
    "videos",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'course_id',
            references:{
                model: Courses,
                key: 'id',
            },
        }
    },
    { 
        timestamps: false,
    }
    
);

module.exports = Videos;