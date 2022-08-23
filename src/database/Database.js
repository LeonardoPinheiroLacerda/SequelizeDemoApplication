const Sequelize = require('sequelize');

class Database {
    static getConnection() {
        return new Sequelize(
            'sequelize',        //database
            'sequelize',        //user
            'sequelize@passwd',  //password
            {
                host: 'localhost',
                dialect: 'postgres',
                timezone: '-03:00'
            }
        );
    }
}

module.exports = Database;