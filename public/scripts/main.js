'use strict';

var axios = require('axios');
var express = require('express');
var hbs = require('hbs');
var htmlToText = require('html-to-text');

var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

var app = express();
var port = process.env.PORT || 3000;
app.set('views engine', 'hbs');
// point to scripts and styles in public directory
app.use(express.static('public'));

var quote = {};

var getNewQuote = function() {
    var promise = axios(url).then(function(response) {
        var data = response.data[0];
		var title = htmlToText.fromString(data.title);
		var content = htmlToText.fromString(data.content)
		
		quote.title = title;
		quote.content = content;
		quote.link = data.link;
		
		response.quote = quote;	
		return response.quote;
	});
	return promise;
}
function foo() {
	console.log('foo');
}

app.get('/', function(request, resp) {
	getNewQuote().then(function(response) {
		resp.render('index.hbs', {
			quote: response,
			// getNewQuote: getNewQuote,
			// foo: foo
		});
	})
	.catch(function(error) {
		console.log(error);
	});
});


app.listen(port, () => {
	console.log(`Server is up on port: ${port}`);
});

module.exports = {
	app: app
}