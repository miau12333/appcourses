const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Instructors = db.define(
    "instructors",
    {
        id: {
            primaryKey: true, 
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Users,
                key: "id",
            },
            field: 'user_id',
        },
    },
    { 
        timestamps: false,
    }
);

module.exports = Instructors;