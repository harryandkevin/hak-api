require('dotenv').config();

const express = require('express');
const db = require('./db');
const path = require('path');
const { PORT, FISH } = process.env;
const Developers = require('./features/developers');

console.log(`Fish is ${FISH}`);

express()
  .get('/', (req, res) => res.send({"message":"Welcome, friends!"}))
  .use(Developers)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
