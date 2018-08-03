const Model = require('./model.js');
const express = require('express');
const app = express();

const route = app.get('/developers', async (req, res) => {
  const developers = await Model.find();
  res.send(developers);
});

module.exports = route;
