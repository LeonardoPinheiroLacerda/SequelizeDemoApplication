const Sequelize = require('sequelize');

require('dotenv').config();

class Database {
    static getConnection() {
        return new Sequelize(
            process.env.DATABASE_SCHEMA,
            process.env.DATABASE_USER,
            process.env.DATABASE_PASSWORD,
            {
                host:       process.env.DATABASE_HOST,
                dialect:    process.env.DATABASE_DIALECT,
                timezone:   process.env.DATABASE_TIMEZONE
            }
        );
    }
}

module.exports = Database;