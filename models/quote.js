var axios = require('axios');
var htmlToText = require('html-to-text');
var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

var Quote = function() {
	var self = this;
	self.getNewQuote = function() {
	    var promise = axios(url).then(function(response) {
			var quote = {}
			var data = response.data[0];
		
			quote.title = htmlToText.fromString(data.title);
			quote.content = htmlToText.fromString(data.content);
			quote.link = data.link;
			
			return quote;
		});
		return promise;
	}
	return self;
}

module.exports = Quote