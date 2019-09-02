const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const database = require('./database/connection');
const customers = require('./api/routes/customers');
const tours = require('./api/routes/tours');

app.use(function (error, request, response, next) {
    console.error(error.stack);
    response.status(400).send(error.message);
});

app.use(express.json());

app.use('/api/customers', customers);
app.use('/api/tours', tours);

app.listen(port, function () {
    console.log(`Node app is running at localhost:  + ${port}`);
});


module.exports = app;