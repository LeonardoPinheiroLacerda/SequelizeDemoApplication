const { Model, DataTypes, Sequelize } = require('sequelize');
const Database = require('../Database');

class Client extends Model {}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        client: {
            type: DataTypes.STRING(75),
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'clients',
        timestamps: true, //enable createdAt, updatedAt
        paranoid: true  //enable deletedAt
    }
);

module.exports = Client;