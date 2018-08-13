require('dotenv').config();
require('babel-register')

const express = require('express');
const db = require('./db');
const path = require('path');
const { PORT, FISH } = process.env;
const Developers = require('./features/developers');

console.log(`Fish is ${FISH}`);

//  Make a connection
db.connect();

express()
  .get('/', (req, res) => res.send({"message":"Welcome, friends!"}))
  .use('/api', [
    Developers.router,
  ])
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
