const express = require('express');
const gzip = require('compression');
const request = require('request');
const app = express();
const articleData = require('./public/articles.json')
const PORT = process.env.port || 6969

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// gzip
app.use(gzip({
	threshold: 0,
	filter: () => true, // Compress all assets by default
}));

app.get('/', function (req, res) {
	res.render('index', { data: articleData});
});

function getPageContent(id) {
	const page = id;
	for (let key in articleData) {
		console.log(key);
		if (key === page) {
			return articleData[key]
		}
	}
}

// app.get('/:id', function (req, res, next) {
// 	const pageContent = getPageContent(req.params.id);
// 	if(typeof pageContent === 'undefined'){
// 		next();
// 	}
// 	else {
// 		res.render('article', { data: pageContent });
// 	}
// });

app.get('*', function (req, res) {
	res.render('404');
});


const server = app.listen(PORT, function () {
	console.log('server is running on port 6969');
});
