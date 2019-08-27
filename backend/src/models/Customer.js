const Sequelize = require('sequelize');
const sequelize = require('../database/connection')

module.exports = sequelize.define('Customer', {
    id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    guestName: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    guestContact: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
    },
    numberOfPeople: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
    },
    amountToPay: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        default: 0,
    },
    bookedFrom: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
})