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
    foreignKey: 'teamId'
});

User.belongsToMany(Team, {
    through: TeamPeople,
    foreignKey: 'userId'
});


module.exports = TeamPeople;