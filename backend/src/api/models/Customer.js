const Sequelize = require('sequelize');
const sequelize = require('../../database/connection');

module.exports = sequelize.define('Customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    customerName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    customerContact: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    numberOfPeople: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    amountToPay: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
    },
    bookedFrom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    TourId: {
        type: Sequelize.INTEGER,
    }
});
