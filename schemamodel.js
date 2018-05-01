const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	firstname: String,
	lastname: String,
	verify: Boolean,
});
userdb = mongoose.model('saini', schema);
module.exports = userdb;
