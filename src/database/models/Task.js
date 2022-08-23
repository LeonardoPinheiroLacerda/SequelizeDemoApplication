const {Model, DataTypes} = require('sequelize');
const Database = require('./../Database');

const Classification = require('./Classification');
const Project = require('./Project');

class Task extends Model{}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.ENUM(
                'New', 
                'Pending', 
                'Running', 
                'Running (Paused)', 
                'Concluded', 
                'Inactive'
            ),
            allowNull: false
        },
        priority: {
            type: DataTypes.ENUM(
                'Low', 
                'Normal', 
                'High'
            ),
            allowNull: true
        },
        startedAt: {
            type: DataTypes.DATE,
            field: 'started_at',
            allowNull: true
        },
        concludedAt: {
            type: DataTypes.DATE,
            field: 'concluded_at',
            allowNull: true,
        },
        title: {
            type:DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        classificationId: {
            type: DataTypes.INTEGER,
            field: 'classification_id'
        },
        projectId: {
            type: DataTypes.INTEGER,
            field: 'project_id'
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'tasks',
        timestamps: true,
        paranoid: true
    }
);

Task.belongsTo(Project, {
    foreignKey: {
        name: 'projectId',
        field: 'project_id',
        allowNull: true
    }
});

Task.belongsTo(Classification, {
    foreignKey: {
        name: 'classificationId',
        field: 'classification_id',
        allowNull: false
    }
});

Project.hasMany(Task, {
    foreignKey: 'projectId'
});

Classification.hasMany(Task, {
    foreignKey: 'classificationId'
});

module.exports = Task;