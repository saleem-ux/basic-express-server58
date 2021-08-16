'use strict';

module.exports = (req, res, next) => {
    const name = req.query.name;
    if (typeof name === 'string') {
        next()
    } else {
        next('try to put a name')
    }
}