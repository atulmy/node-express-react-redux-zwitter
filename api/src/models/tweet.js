// src / models / tweet.js
'use strict'

const mongoose = require('mongoose')

// Tweet Collection
let TweetSchema = mongoose.Schema({
  text: String,
  userId: String,
  createdAt: Date
})

let Tweet = mongoose.model('tweets', TweetSchema)

module.exports = Tweet
