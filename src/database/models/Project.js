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
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'projects',
        timestamps: true,
        paranoid: true
    }
);

Project.belongsTo(Team, {
    foreignKey: {
        name: 'teamId',
        field: 'team_id',
        allowNull: false
    }
});
Project.belongsTo(Client, {
    foreignKey: {
        name: 'clientId',
        field: 'client_id',
        allowNull: false
    }
});

Client.hasMany(Project, {
    foreignKey: 'client_id'
});

Team.hasMany(Project, {
    foreignKey: 'team_id'
});

module.exports = Project;