'use strict';

require('dotenv').config('./src/server');

const server = require('./src/server');

server.start(process.env.PORT || 8080);