// src / routes / user.js
'use strict';

// Imports
const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('./../config');
let authMiddleware = require('./middlewares/auth');
let User = require('../models/user');

// Common Routes
let userRoutes = express.Router();

// Login
userRoutes.post('/user/login', authMiddleware, (request, response) => {
    let responseData = {
        success: false,
        data: {},
        errors: []
    };

    if(request.body.username) {
        User.findOne({username: request.body.username}, (error, document) => {

            if(error) {
                responseData.errors.push({type: 'critical', message: error});
            } else {
                console.log(document);

                if(!document) {
                    responseData.errors.push({type: 'warning', message: 'No user exists with this username.'});
                } else {
                    if(document.password != request.body.password) {
                        responseData.errors.push({type: 'critical', message: 'The password is incorrect.'});
                    } else {
                        responseData.data.token = jwt.sign(document, config.secret);
                        responseData.success = true;
                    }
                }
            }

            response.json(responseData);
        });
    } else {
        responseData.errors.push({type: 'critical', message: 'Username not provided.'});

        response.json(responseData);
    }
});

// Register
userRoutes.post('/user/register', (request, response) => {
    let responseData = {
        success: false,
        data: {},
        errors: []
    };

    if(request.body.username != '') {
        // Check user exists
        User.findOne({ username: request.body.username }, (error, document) => {
            if(!document) {
                // User does not exists

                let user = {
                    username: request.body.username,
                    password: request.body.password,
                    createdAt: new Date()
                };

                User.create(user, function (errorCreate, documentCreate) {
                    let userId = documentCreate._id;

                    if(userId) {
                        responseData.success = true;
                        responseData.data.userId = userId;
                    } else {
                        responseData.errors.push({type: 'default', message: 'Please try again.'});
                    }

                    response.json(responseData);
                });
            } else {
                // User already exists

                responseData.errors.push({type: 'warning', message: 'The username is taken. Please choose something else.'});

                response.json(responseData);
            }
        });
    } else {
        responseData.errors.push({type: 'critical', message: 'Username not provided.'});

        response.json(responseData);
    }
});

// Export
module.exports = userRoutes;