var express = require('express');
var mongoose = require('mongoose');
var postdb = require('../Schema/postschema');

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

router.post('/postform', upload.single('fileToBeSent'), (req, res) => {
	console.log('router postform route is called');
	console.log('req.file', req.file.path);

	res.send('postformRouter file1');
	postdb.create({
		description: req.body.description,
		category: req.body.category,
		originalname: req.file.originalname,
		email: req.body.email,
	});
});
router.post('/allpost', (req, res) => {
	if (req.body.email == '') {
		postdb.find(function(err2, res2) {
			res.send(res2);
		});
	} else {
		postdb.find({ email: req.body.email }, function(err2, res2) {
			res.send(res2);
		});
	}
});

module.exports = router;
