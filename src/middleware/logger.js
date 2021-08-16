'use strict';

module.exports = (req, res, next)=>{
    console.log('Request LOGGER', req.method, req.path);
    next();
}