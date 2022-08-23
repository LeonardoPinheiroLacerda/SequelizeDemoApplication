const {Model, DataTypes} = require('sequelize');
const Database = require('./../Database');

const User = require('./User');
const Task = require('./Task')

class Backlog extends Model{}

Backlog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        note: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        taskId: {
            type: DataTypes.INTEGER,
            field: 'task_id',
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            allowNull: false
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'backlogs',
        timestamps: true,
        paranoid: true
    }
);

Backlog.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false
    }
});

Backlog.belongsTo(Task, {
    foreignKey: {
        name: 'taskId',
        field: 'task_id',
        allowNull: false
    }
});

User.hasMany(Backlog, {
    foreignKey: 'userId'
});

Task.hasMany(Backlog, {
    foreignKey: 'taskId'
});

module.exports = Backlog;

