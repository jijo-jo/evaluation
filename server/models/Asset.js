const Sequelize = require('sequelize');
const db = require('../config/database');

const Asset = db.define('Asset', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assetclass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    snumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    producedate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    waranty: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fromdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    todate: {
        type: Sequelize.DATE,
        allowNull: false
    }
 
});

module.exports = Asset;