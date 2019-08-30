const express = require('express');
const router = express.Router();
const Customer = require('../../api/models/Customer');
const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    customerName: Joi.string().alphanum().min(3).max(30).required(),
    customerContact: Joi.string().alphanum().min(3).max(30).required(),
    numberOfPeople: Joi.number().integer().min(1).required(),
    amountToPay: Joi.number().integer().min(0).max(10000).required(),
    bookedFrom: Joi.string().alphanum().min(3).max(30).required(),
    TourId: Joi.number().integer().min(0).required(),
})

router.get('/', (req, res) => {
    Customer.findAll().then(c => {
        res.send(JSON.stringify(c));
    })
});

router.get('/:id', (req, res) => {
    Customer.findAll({ where: { id: req.params.id } }).then(customer => {
        if (customer == '') {
            res.status(404).send('Error 404: Customer not found');
        }
        res.send(JSON.stringify(customer));
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    const validate = Joi.validate({
        customerName: req.body.customerName,
        customerContact: req.body.customerContact,
        numberOfPeople: req.body.numberOfPeople,
        amountToPay: req.body.amountToPay,
        bookedFrom: req.body.bookedFrom,
        TourId: req.body.TourId,
    }, schema);

    if (validate.error != null) {
        res.status(400).send('Error 400: Bad request')
    }

    else {
        const customer = {
            customerName: req.body.customerName,
            customerContact: req.body.customerContact,
            numberOfPeople: req.body.numberOfPeople,
            amountToPay: req.body.amountToPay,
            bookedFrom: req.body.bookedFrom,
            TourId: req.body.TourId,
        }

        Customer.create(customer);
        res.send(customer);
    }
});

router.put('/:id', (req, res) => {
    Customer.findAll({ where: { id: req.params.id } }).then(customer => {
        if (customer == '') {
            res.status(404).send('Error 404: Customer not found');
        }
        else {
            const validate = Joi.validate({
                customerName: req.body.customerName,
                customerContact: req.body.customerContact,
                numberOfPeople: req.body.numberOfPeople,
                amountToPay: req.body.amountToPay,
                bookedFrom: req.body.bookedFrom,
                TourId: req.body.TourId,
            }, schema);

            if (validate.error != null) {
                res.status(400).send('Error 400: Bad request')
            }

            else {
                const customer = {
                    customerName: req.body.customerName,
                    customerContact: req.body.customerContact,
                    numberOfPeople: req.body.numberOfPeople,
                    amountToPay: req.body.amountToPay,
                    bookedFrom: req.body.bookedFrom,
                    TourId: req.body.TourId,
                }

                Customer.update(customer);
                res.send(customer);
            }
        }
    })
});

router.delete('/:id', (req, res) => {
    Customer.findAll({ where: { id: req.params.id } }).then(customer => {
        if (customer == '') {
            res.status(404).send('Error 404: Customer not found');
        }
        else {
            res.send(JSON.stringify(customer));
            Customer.destroy({ where: { id: req.params.id } });
        }
    })
});

module.exports = router;