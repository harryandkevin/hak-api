import Mongoose from 'mongoose';
const { MONGODB_URI } = process.env;

export const connect = async (fn) => {
  try {
    await Mongoose.connect(MONGODB_URI)
    console.log('Connection to Mongo successful');
    if (typeof fn === 'function') {
      fn();
    }
  } catch (e) {
    console.log('Failed to connect to Mongo', e);
  }
};


