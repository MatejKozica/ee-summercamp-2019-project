const Sequelize = require('sequelize');
const Tour = require('../api/models/Tour');
const Customer = require('../api/models/Customer');

Tour.hasMany(Customer, { foreignKey: 'id' });
Customer.belongsTo(Tour, { foreignId: 'tourId' });

const date = new Date();

/* Tour.create({
    tourType: 'SSK',
    tourTime: date.getDate(),
    guide: 'Miško',
}); */

/* Customer.create({
    customerName: 'Mate',
    customerContact: '0021',
    numberOfPeople: 2,
    amountToPay: 0,
    bookedFrom: 'Viator',
    TourId: 1,
}) */

/* Customer.update({ TourId: 1, }, { where: { id: 1 } }, ) */

async function test() {
    const result = await Customer.findAll({ where: { TourId: 1 } });
    console.log(JSON.stringify(result));
}

test();