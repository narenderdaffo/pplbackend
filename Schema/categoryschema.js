const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
	category: String,
	originalname: String,
	email: String,
});
categorydb = mongoose.model('category', schema);
module.exports = categorydb;
