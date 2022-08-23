const {Model, DataTypes} = require('sequelize');
const Database = require('./../Database');

const Backlog = require('./Backlog');
const User = require('./User');

class BacklogNotification extends Model {}

BacklogNotification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        notified: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        backlogId: {
            type: DataTypes.INTEGER,
            field: 'backlog_id',
            allowNull: false
        },
        nofifiedUser: {
            type: DataTypes.INTEGER,
            field: 'notified_user',
            allowNull: false
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'backlogs_notifications',
        timestamps: true, 
        paranoid: true
    }
);

BacklogNotification.belongsTo(Backlog, {
    foreignKey: {
        name: 'backlogId',
        field: 'backlog_id',
        allowNull: false
    }
});

BacklogNotification.belongsTo(User, {
    foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false
    },
    as: 'notifiedUser'
});

Backlog.hasMany(BacklogNotification, {
    foreignKey: 'backlogId',
    as: 'notification'
});

User.hasMany(BacklogNotification, {
    foreignKey: 'userId'
})

module.exports = BacklogNotification;