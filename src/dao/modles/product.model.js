import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
		"title": {type: String, Required: true},
		"status": {type: Boolean},
		"category": {type: String, required: true},
		"description": {type: String, required: true},
		"price": {type: Number, required: true},
		"thumbnails": {type: String},
		"status": { type: Boolean, default:true},
		"code": {type: String, required: true},
		"stock": {type: Number, required: true}
},{timestamps: true})

export default mongoose.model('Product',productsSchema);