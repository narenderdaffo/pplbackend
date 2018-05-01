var express = require('express');
var mongoose = require('mongoose');
var postdb = require('../Schema/postschema');
var router = express.Router();
router.post('/', (req, res) => {
	console.log('this is singlepost in router');
	postdb.find({ _id: req.body.id }, function(err2, res2) {
		console.log(res2);
		res.send(res2);
	});
});

module.exports = router;
