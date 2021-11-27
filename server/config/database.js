const { Sequelize } = require('sequelize');
const db = new Sequelize('XYZ-database', 'sqlite', 'sqlite123', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;