const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');

module.exports = sequelize.define('Tour', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tourType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tourTime: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    guide: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

