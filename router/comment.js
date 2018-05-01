var express = require('express');
var mongoose = require('mongoose');
var postdb = require('../Schema/postschema');
var router = express.Router();
router.post('/', (req, res) => {
	console.log('this is comment in router');
	postdb.update(
		{
			_id: req.body.id,
			description: req.body.currentpost[0].description,
			category: req.body.currentpost[0].category,
		},
		{ $push: { comments: { $each: [{ comment: req.body.comment, postname: req.body.postname }] } } },
		{ multi: true },
		function(err2, res2) {
			console.log(res2);
			res.send(res2);
		}
	);
});

router.post('/allcomments', (req, res) => {
	console.log('this is allcomment in router', req.body.currentpost);
	postdb.find({ _id: req.body.currentpost[0]._id }, function(err2, res2) {
		res.send(res2);
	});
});

module.exports = router;
