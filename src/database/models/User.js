const {DataTypes, Model} = require('sequelize');
const Database = require('./../Database');

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(50),
            field: 'last_name',
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        telephoneNumber: {
            type: DataTypes.STRING(25),
            field: 'telephone_number',
            allowNull: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'users',
        timestamps: true,
        paranoid: true
    }
);

module.exports = User;
