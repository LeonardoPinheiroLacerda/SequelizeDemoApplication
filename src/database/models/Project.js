const {DataTypes, Model} = require('sequelize');
const Database = require('./../Database');

const Client = require('./Client');
const Team = require('./Team');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        project: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        teamId: {
            type: DataTypes.INTEGER,
            field: 'team_id',
            allowNull: false
        },
        clientId: {
            type: DataTypes.INTEGER,
            field: 'client_id',
            allowNull: false
        },
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'projects',
        timestamps: true,
        paranoid: true
    }
);

Project.belongsTo(Team, {
    foreignKey: 'teamId'
});
Project.belongsTo(Client, {
    foreignKey: 'clientId'
});

Client.hasMany(Project, {
    foreignKey: 'client_id'
});

Team.hasMany(Project, {
    foreignKey: 'team_id'
});

module.exports = Project;