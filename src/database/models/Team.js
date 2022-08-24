const {DataTypes, Model} = require('sequelize');
const Database = require('./../Database');

const User = require('./User');

class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        leaderId: {
            type: DataTypes.INTEGER,
            field: 'leader_id',
            allowNull: false
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'teams',
        paranoid: true,
        timestamps: true
    }
);


Team.belongsTo(User, {
    foreignKey: 'leaderId',
    as: 'leader'
});

User.hasMany(Team, {
    foreignKey: 'leaderId',
    as: 'leaderedTeam'
});

module.exports = Team;