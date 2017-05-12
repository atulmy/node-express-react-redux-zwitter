// src / server.js
'use strict';

// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config');
let commonRoutes = require('./routes');
let userRoutes = require('./routes/user');
let tweetRoutes = require('./routes/tweet');

// Setup
let apiServer = express();
apiServer.set('APP_SECRET', config.secret);

// MongoDB (mongoose)
mongoose.connect(config.databaseUrl);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body Parser
apiServer.use(bodyParser.urlencoded({ extended: false }));
apiServer.use(bodyParser.json());

// Cookie Parser
apiServer.use(cookieParser());

// Enable CORS
apiServer.use(function(request, response, next) {
    request.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
apiServer.use(commonRoutes);
apiServer.use(userRoutes);
apiServer.use(tweetRoutes);

// Export
module.exports = apiServer;