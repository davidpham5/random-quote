var express = require('express')
var router = express.Router()
var Quote = require('./../models/quote')

router.get('/', function(request, resp) {

	Quote().getNewQuote().then(quote => {
		resp.render('index.hbs', {
			quote: quote
		})
	})
	.catch(function(error) {
		console.log(error);
	});
});


module.exports = router