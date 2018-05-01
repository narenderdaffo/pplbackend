var express = require('express');
var mongoose = require('mongoose');
var categorydb = require('../Schema/categoryschema');

var router = express.Router();

var multer = require('multer');

var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '/home/traininglap/Desktop/narender/snake and leader/snake and leader/router/uploads');
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	},
});

var upload = multer({ storage: storage });

router.post('/category', upload.single('fileToBeSent'), (req, res) => {
	console.log('this is category in router');
	console.log(req.body.email, req.body.category, req.file);
	categorydb.create({
		category: req.body.category,
		originalname: req.file.originalname,
		email: req.body.email,
	});
	res.send('success');
});
router.post('/allcat', (req, res) => {
	console.log('this is allcat in router');
	console.log(req.body.email);
	categorydb.find({ email: req.body.email }, { _id: 0 }, function(err2, res2) {
		console.log(res2);
		res.send(res2);
	});
});
module.exports = router;
