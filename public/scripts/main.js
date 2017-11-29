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
// var fetchQuote = function() {
//     axios(url).then(function(response) {
//         var data = response.data[0];
//         var quote = {
//             title: data.title,
//             content: data.content,
//             link: data.link
//         };
//         //console.log(quote);
//         return quote;
//     });
// }


app.get('/', function(request, resp) {
	axios(url).then(function(response) {
		var data = response.data[0];
		var title = htmlToText.fromString(data.title);
		var content = htmlToText.fromString(data.content)
		
		var quote = {
			title: title,
			content: content,
			link: data.link
		};
		
		resp.render('index.hbs', {
			quote: quote
		});
	});
});


app.listen(port, () => {
	console.log(`Server is up on port: ${port}`);
});

module.exports = {
	app: app
}