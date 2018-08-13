import express from 'express';
import mongoose from 'mongoose';
import { Model as Developers } from './model';

export const router = express.Router();

/**
 * Gets a list of developers
 * @param {Object} req The Request
 * @param {Object} res The response
 */
export async function getList (req, res) {
  try {
    const developers = await Developers.find();
    res.send(developers.map(item => item.toObject({ virtuals: true, _id: false })));
  } catch (e) {
    console.error(e);
    res.send('Error');
  }
}

// ROUTES
router.get('/developers', getList);
