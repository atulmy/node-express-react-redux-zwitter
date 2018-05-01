// src / routes / user.js
'use strict'

// Imports
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const config = require('./../config')
let authMiddleware = require('./middlewares/auth')
let User = require('../models/user')

// Common Routes
let userRoutes = express.Router()

// Login
userRoutes.post('/user/login', authMiddleware, (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  if (request.body.username) {
    User.findOne({username: request.body.username}, (error, document) => {

      if (error) {
        responseData.errors.push({type: 'critical', message: error})

        response.json(responseData)
      } else {
        if (!document) {
          responseData.errors.push({type: 'warning', message: 'No user exists with this username.'})

          response.json(responseData)
        } else {
          bcrypt.compare(request.body.password, document.password, function (hashError, hashPasswordCheck) {
            if (!hashError) {
              if (hashPasswordCheck) {
                responseData.data.token = jwt.sign(document._doc, config.secret)
                responseData.success = true
              } else {
                responseData.errors.push({type: 'critical', message: 'The password is incorrect.'})
              }

              response.json(responseData)
            } else {
              responseData.errors.push({type: 'critical', message: 'Please try again.'})

              response.json(responseData)
            }
          })
        }
      }
    })
  } else {
    responseData.errors.push({type: 'critical', message: 'Username not provided.'})

    response.json(responseData)
  }
})

// Register
userRoutes.post('/user/register', (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  if (request.body.username != '') {
    // Check user exists
    User.findOne({username: request.body.username}, (error, document) => {
      if (!document) {
        // User does not exists

        // Hash password
        bcrypt.hash(request.body.password, config.saltRounds, function (hashError, hashPassword) {
          if (!hashError) {
            // Define new user
            let user = {
              username: request.body.username,
              password: hashPassword,
              createdAt: new Date()
            }

            // Save into database
            User.create(user, function (errorCreate, documentCreate) {
              let userId = documentCreate._id

              if (userId) {
                responseData.success = true
                responseData.data.userId = userId
              } else {
                responseData.errors.push({type: 'default', message: 'Please try again.'})
              }

              response.json(responseData)
            })
          } else {
            responseData.errors.push({type: 'default', message: 'Please try again.'})
          }
        })

      } else {
        // User already exists

        responseData.errors.push({type: 'warning', message: 'The username is taken. Please choose something else.'})

        response.json(responseData)
      }
    })
  } else {
    responseData.errors.push({type: 'critical', message: 'Username not provided.'})

    response.json(responseData)
  }
})

// Export
module.exports = userRoutes
