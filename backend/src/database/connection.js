const Sequelize = require('sequelize');

const sequelize = new Sequelize('ee-camp-project', 'postgres', '321', {
    host: 'localhost',
    dialect: 'postgres',
})

