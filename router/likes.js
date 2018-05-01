var express = require('express');
var mongoose = require('mongoose');
var postdb = require('../Schema/postschema');
var router = express.Router();
router.post('/', (req, res) => {
	console.log('this is likes.js in router', req.body.likes);

	if (req.body.likes == 'unlike') {
		postdb.update(
			{ _id: req.body.id },
			{ $pull: { likes: { email: req.body.email } } },
			{
				multi: true,
			},
			(err2, res2) => {
				console.log('0000000', res);
				res.send(res2);
			}
		);
	}
	if (req.body.likes == 'like') {
		postdb.update(
			{
				_id: req.body.id,
			},
			{ $push: { likes: { $each: [{ likes: req.body.likes, email: req.body.email }] } } },
			function(err2, res2) {
				console.log('111111', res2);
				res.send(res2);
			}
		);
	}
});

router.post('/alllikes', (req, res) => {
	console.log('this is allcomment in router', req.body.currentpost);
	postdb.find({ _id: req.body.currentpost[0]._id }, function(err2, res2) {
		res.send(res2);
	});
});

module.exports = router;
