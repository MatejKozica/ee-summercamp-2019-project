const express = require('express');
const router = express.Router();
const Customer = require('../../api/models/Customer')

router.get('/', (req, res) => {
    Customer.findAll().then(c => {
        res.send(JSON.stringify(c));
    })
})

module.exports = router;