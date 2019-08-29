'use strict';
const Sequelize = require('sequelize');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tours', {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tours');
  }
};
