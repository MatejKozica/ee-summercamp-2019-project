const Sequelize = require('sequelize');

const sequelize = new Sequelize('ee-camp-project', 'postgres', '321', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });