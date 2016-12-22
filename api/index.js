'use strict';

// Imports
const express = require('express');

const config = require('./src/config');
let appServer = require('./src/server');

// Boot Server
const port = process.env.PORT || config.port;

appServer.listen(port, () => {
    console.log('Server running on', port);
});