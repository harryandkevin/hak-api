const { Database, Model } = require('mongorito');
const { MONGODB_URI } = process.env;

const db = new Database(MONGODB_URI);

const connect = async () => {
  try {
    await db.connect();
    console.log('Connection to Mongo successful');
  } catch (e) {
    console.log('Failed to connect to Mongo', e);
  }
};

connect();

module.exports = db;
