var express = require('express');
var mongoose = require('mongoose');
var userdb = require('../Schema/userschema');
app = express();
var cors = require('cors');
app.use(cors());
var router = express.Router();
router.post('/', (req, res) => {
	userdb.update({ email: req.body.email }, { $set: { password: req.body.newpass } }, function(err1, res1) {
		console.log('password response is', res1);
		res.send(res1);
	});
});

module.exports = router;
