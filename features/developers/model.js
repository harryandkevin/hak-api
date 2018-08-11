import Mongoose from 'mongoose';

/**
 * Developer Base Class
 */
export class Developer {
	/**
	 * Setup virtual for fullname
	 */
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

export const schema = {
	firstName: String,
	lastName: String,
	email: String,
	motto: String
};

const options = {
	toObject: {
		transform: (doc, ret) => {
      delete ret._id
      return ret;
    }
	}
};

const mongooseSchema = new Mongoose.Schema(schema, options); 
mongooseSchema.loadClass(Developer);

export const Model = Mongoose.model('Developer', mongooseSchema);