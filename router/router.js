var express = require('express');
var mongoose = require('mongoose');
var userdb = require('../Schema/userschema');
app = express();
var cors = require('cors');
app.use(cors());
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
router.post('/', (req, res) => {
	tmp1 = req.body.email;
	console.log(tmp1);
	tmp2 = req.body.password;
	console.log('tmp2', tmp2);

	userdb.find({ email: tmp1 }, { _id: 1 }, function(err2, req2) {
		console.log(req2);
		if (req2.length > 0) {
			userdb.find({ email: tmp1, password: tmp2 }, { _id: 1 }, function(err3, req3) {
				console.log(req3);
				if (req3.length > 0) {
					console.log('account found');
					userdb.find({ email: tmp1, password: tmp2, verify: true }, { _id: 0 }, function(err4, req4) {
						if (req4.length > 0) {
							console.log('account found and verified');
							console.log('req4', req4);
							res.send(req4);
						} else {
							console.log('account found but not verified');
							res.end('account found but not verified');
						}
					});
				} else {
					console.log('password incorrect');
					res.end('password incorrect');
				}
			});
		} else {
			res.send(req2);
		}
	});
});
router.post('/adddata', (req, res) => {
	tmp1 = req.body.username;
	console.log(tmp1);
	tmp2 = req.body.password;
	console.log(tmp2);
	tmp3 = req.body.email;
	console.log(tmp3);
	tmp4 = req.body.firstname;
	console.log(tmp4);
	tmp5 = req.body.lastname;
	console.log(tmp5);
	userdb.find({ email: tmp3 }, function(err, res1) {
		console.log(res1);
		if (err) {
			console.log('erre');
			console.log(err);
		} else {
			console.log(res1);
			if (res1.length < 1) {
				console.log('in the if part');
				userdb.create(
					{ username: tmp1, password: tmp2, email: tmp3, firstname: tmp4, lastname: tmp5, verify: true },
					function(err, res1) {
						if (err) {
							console.log('erre');
							console.log(err);
						} else {
							res.sendFile(__dirname + '/login.html');
						}
					}
				);
			} else {
				res.send('Email alredy exists');
			}
		}
	});
});

module.exports = router;
