const path = require('path');
const cookieSession = require('cookie-session');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const singlepost = require('./router/singlepost');
mongoose.connect('mongodb://localhost:27017/ppldb');
const ejs = require('ejs');
const router = require('./router/router');
const posts = require('./router/posts');
const category = require('./router/category');
const comment = require('./router/comment');
const likes = require('./router/likes');
const password = require('./router/password');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: ['bbabbababaab'],
	})
);
app.listen(3993);
console.log('BINGO');
app.use('/adddata', router);
app.use('/login', router);
app.use('/postform', posts);
app.use('/comment', comment);
app.use('/likes', likes);
app.use('/category', category);
app.use('/password', password);
app.use('/singlepost', singlepost);
app.get('/aa', function(req, res) {
	res.sendFile(__dirname + '/login.html');
});
app.use('/gamepage', (req, res) => {
	res.sendFile(__dirname + '/008.png');
});
