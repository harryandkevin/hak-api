require('dotenv').config();

const express = require('express');
const db = require('./db');
const path = require('path');
const { PORT, FISH } = process.env;

console.log(`Fish is ${FISH}`);

express()
    .get('/', (req, res) => {
        res.send({
            "message": "You are so cool"
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
