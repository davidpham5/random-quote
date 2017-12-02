'use strict';

$(function() {
	$('#hit-me-real-good').bind('click', getQuote)

	function getQuote() {
		$.get('api/quote', displayQuote)
	}
	
	function displayQuote(quote) {	
		$('#quote-title').html(quote.title)
		$('#quote-content').html(quote.content)
	}
})
