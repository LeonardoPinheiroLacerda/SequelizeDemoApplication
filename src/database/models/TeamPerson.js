const { Model, DataTypes } = require("sequelize");
const Database = require("../Database");

const Team = require('./Team');
const User = require('./User');

class TeamPeople extends Model{}

TeamPeople.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            primaryKey: true
        },
        teamId: {
            type: DataTypes.INTEGER,
            field: 'team_id',
            primaryKey: true
        }
    },
    {
        sequelize: Database.getConnection(),
        modelName: 'team_people',
        timestamps: true
    }
);

Team.belongsToMany(User, {
    through: TeamPeople,
    foreignKey: {
        name: 'teamId',
        field: 'team_id',
        allowNull: false
    }
});

User.belongsToMany(Team, {
    through: TeamPeople,
    foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false
    }
});


module.exports = TeamPeople;