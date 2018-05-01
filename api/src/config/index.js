// src / config / index.js
'use strict'

const config = {
  port: 5001,
  secret: 'super-secret-key',
  databaseUrl: 'mongodb://localhost/zwitter',
  saltRounds: 10
}

module.exports = config
