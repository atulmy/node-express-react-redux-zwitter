// src / routes / user.js
'use strict'

// Imports
const express = require('express')
const isEmpty = require('lodash/isEmpty')

// App Imports
const config = require('./../config')
let authMiddleware = require('./middlewares/auth')
let Tweet = require('../models/tweet')

// Common Routes
let tweetRoutes = express.Router()

// Tweets (/tweets)
tweetRoutes.get('/tweets', authMiddleware, (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  Tweet.find({}).sort('-createdAt').exec(function (error, documents) {
    if (documents.length > 0) {
      responseData.data = documents
      responseData.success = true
    }

    response.json(responseData)
  })
})

// Tweet Add (/tweet/add)
tweetRoutes.post('/tweet/add', authMiddleware, (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  if (!isEmpty(request.user)) {
    if (request.body.text != '') {
      let tweet = {
        text: request.body.text,
        userId: request.user._id,
        createdAt: new Date()
      }

      Tweet.create(tweet, (error, document) => {
        if (error) {
          responseData.errors.push({type: 'critical', message: error})
        } else {
          let tweetId = document._id

          if (tweetId) {
            responseData.data.tweetId = tweetId
            responseData.success = true
          } else {
            responseData.errors.push({type: 'default', message: 'Please try again.'})
          }
        }

        response.json(responseData)
      })
    } else {
      responseData.errors.push({type: 'warning', message: 'Please enter tweet.'})

      response.json(responseData)
    }
  } else {
    responseData.errors.push({type: 'critical', message: 'You are not signed in. Please sign in to post a tweet.'})

    response.json(responseData)
  }
})

// Single Tweets (/tweet/tweetId)
tweetRoutes.get('/tweet/:tweetId', authMiddleware, (request, response) => {
  let responseData = {
    success: false,
    data: {},
    errors: []
  }

  if (request.params.tweetId) {
    Tweet.find({_id: request.params.tweetId}).exec(function (error, documents) {
      if (documents && documents.length > 0) {
        responseData.data = documents[0]
        responseData.success = true
      }

      response.json(responseData)
    })
  } else {
    response.json(responseData)
  }
})

// Export
module.exports = tweetRoutes
