const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    tourType: Joi.string().alphanum().min(3).max(30).required(),
    tourTime: Joi.date().required(),
    guide: Joi.string().min(3).max(30).required(),
});

router.get('/', (req, res) => {
    Tour.findAll().then(c => {
        res.send(JSON.stringify(c));
    })
});

router.get('/:id', (req, res) => {
    Tour.findAll({ where: { id: req.params.id } }).then(tour => {
        if (tour == '') {
            res.status(404).send('Error 404: Tour not found');
        }
        res.send(JSON.stringify(tour));
    })
});

router.post('/', (req, res) => {
    console.log(req.body);

    const validate = Joi.validate({
        tourType: req.body.tourType,
        tourTime: req.body.tourTime,
        guide: req.body.guide,
    }, schema);

    console.log(validate.error);

    if (validate.error != null) {
        res.status(400).send('Error 400: Bad request');

    }

    else {
        const tour = {
            tourType: req.body.tourType,
            tourTime: req.body.tourTime,
            guide: req.body.guide,
        }
        Tour.create(tour);
        res.send(tour);
    }
});

router.put('/:id', (req, res) => {
    Tour.findAll({ where: { id: req.params.id } }).then(tour => {
        if (tour == '') {
            res.status(404).send('Error 404: Tour not found');
        }
        else {
            const validate = Joi.validate({
                tourType: req.body.tourType,
                tourTime: req.body.tourTime,
                guide: req.body.guide,
            }, schema);

            if (validate.error != null) {
                res.status(400).send('Error 400: Bad request')
            }

            else {
                const tour = {
                    tourType: req.body.tourType,
                    tourTime: req.body.tourTime,
                    guide: req.body.guide,
                }
                Tour.update(tour);
                res.send(tour);
            }
        }
    })
});

router.delete('/:id', (req, res) => {
    Tour.findAll({ where: { id: req.params.id } }).then(tour => {
        if (tour == '') {
            res.status(404).send('Error 404: Tour not found');
        }
        else {
            res.send(JSON.stringify(tour));
            Tour.destroy({ where: { id: req.params.id } });
        }
    })
});

module.exports = router;