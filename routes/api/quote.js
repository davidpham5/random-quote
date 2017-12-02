'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');
var Quote = require('../../models/quote');

router.get('/', function(req, res) {

	Quote().getNewQuote().then(quote => {
		res.send(quote)
	})
	.catch(function(error) {
		console.log(error);
	});
})

module.exports = router