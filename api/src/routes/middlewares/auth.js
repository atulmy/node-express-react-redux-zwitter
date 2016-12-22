// src / routes / middlewares / auth.js
'use strict';

// Imports
const jwt = require('jsonwebtoken');

const config = require('../../config/index');

// Auth Middleware
let authMiddleware = function (request, response, next) {
    let token = request.body.token || request.query.token || request.headers['x-access-token'] || request.cookies.token;

    console.log('Auth Middleware', token);

    if(token) {
        let decoded = jwt.verify(token, config.secret);

        request.user = decoded._doc;

        console.log(request.user);
    } else {
        request.user = {};
    }

    next();
};

// Export
module.exports = authMiddleware;