'use strict'

// Imports
const express = require('express')

const config = require('./config')
let appServer = require('./server')

// Boot Server
const port = process.env.PORT || config.port

appServer.listen(port, () => {
  console.log('Server running on', port)
})
