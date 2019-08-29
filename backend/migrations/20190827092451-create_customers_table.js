'use strict';

const Sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      customerName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      customerContact: {
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
      TourId: {
        type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
