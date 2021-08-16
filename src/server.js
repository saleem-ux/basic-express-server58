'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.use(logger)

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

app.get('/bad', (req, res, next) => {
    next('error from bad end point')
});

app.get('/person', validator, (req, res) => {
    res.json({
        name: req.query.name,
    })
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
};

module.exports = {
    start,
    app
}