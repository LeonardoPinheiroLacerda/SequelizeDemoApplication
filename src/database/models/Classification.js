const {DataTypes, Model} = require('sequelize');
const Database = require('../Database');

class Classification extends Model {}

Classification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        classification: {
            type: DataTypes.STRING(75),
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'classifications',
        timestamps: true,
        paranoid: true
    }
);

module.exports = Classification
