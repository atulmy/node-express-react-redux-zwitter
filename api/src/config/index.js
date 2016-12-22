// src / config / index.js
'use strict';

const config = {
    port: 3001,
    secret: 'super-secret-key',
    databaseUrl: 'mongodb://localhost/someha',
    saltRounds: 10
};

module.exports = config;