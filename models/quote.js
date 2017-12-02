var axios = require('axios');
var htmlToText = require('html-to-text');
var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

var Quote = function() {

	this.getNewQuote = function() {
	    var promise = axios(url).then(function(response) {
	        var data = response.data[0];
			var title = htmlToText.fromString(data.title);
			var content = htmlToText.fromString(data.content)
			
			var quote = {}

			quote.title = title;
			quote.content = content;
			quote.link = data.link;
			
			return quote;
		});
		return promise;
	}

	return this
}

module.exports = Quote