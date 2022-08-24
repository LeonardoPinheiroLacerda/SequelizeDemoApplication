const {Model, DataTypes} = require('sequelize');
const Database = require('./../Database');

const Task = require('./Task');

class Attachment extends Model{}

Attachment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        taskId: {
            type: DataTypes.INTEGER,
            field: 'task_id',
            allowNull: false
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'attachments',
        timestamps: true,
        paranoid: true
    }
);

Attachment.belongsTo(Task, {
    foreignKey: 'taskId'
});

Task.hasMany(Attachment, {
    foreignKey: 'taskId'
});

module.exports = Attachment;