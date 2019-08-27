async function pokreni() {
    const Customer = require('./models/Customer');

    const customer = await Customer.create({
        guestName: "test",
        guestContact: "+385 123 1234",
        numberOfPeople: 4,
        amountToPay: 0,
        bookedFrom: 'Viator',
    }).catch(err => console.error(err))

    const customers = await Customer.findAll();
    console.log(JSON.stringify(customers));
}

pokreni();
