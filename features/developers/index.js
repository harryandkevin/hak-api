
const express = require('express');
const app = express();
import mongoose from 'mongoose';
import { Model as Developers } from './model';


const route = app.get('/developers', async (req, res) => {
  try {
    const developers = await Developers.find();
    res.send(developers.map(item => item.toObject({ virtuals: true, _id: false })));
  } catch (e) {
    console.error(e);
    res.send('Error');
  }

});

module.exports = route;
