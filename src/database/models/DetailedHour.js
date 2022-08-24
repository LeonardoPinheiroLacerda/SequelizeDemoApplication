const {Model, DataTypes} = require('sequelize');
const Database = require('./../Database');

const Task = require('./Task');
const User = require('./User');

class DetailedHour extends Model{}

DetailedHour.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
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
        modelName: 'detailed_hours',
        timestamps: true,
        paranoid: true
    }
);

DetailedHour.belongsTo(Task, {
    foreignKey: {
        name: 'taskId',
        field: 'task_id',
        allowNull: false
    }
});

DetailedHour.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false
    }
});

Task.hasMany(DetailedHour, {
    foreignKey: 'taskId'
});

Task.hasMany(DetailedHour, {
    foreignKey: 'userId'
});

module.exports = DetailedHour;