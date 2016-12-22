// src / routes / index.js
'use strict';

// Imports
const express = require('express');

let authMiddleware = require('./middlewares/auth');

// Common Routes
let commonRoutes = express.Router();

// Root
commonRoutes.get('/', authMiddleware, (request, response) => {
    let responseData = {
        success: false,

        errors: {}
    };

    response.json(responseData);
});

// Export
module.exports = commonRoutes;