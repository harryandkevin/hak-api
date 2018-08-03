const db = require('../../db.js');
const { Model } = require('mongorito');

class Developers extends Model {
  collection() {
		return 'Developers';
	}
}

db.register(Developers);

module.exports = Developers;
