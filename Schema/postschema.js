const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
	description: String,
	category: String,
	originalname: String,
	email: String,
	comments: Array,
	likes: Array,
});
postdb = mongoose.model('posts', schema);
module.exports = postdb;
