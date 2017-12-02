
$(function() {
	$('#hit-me-real-good').bind('click', getQuote)

	function getQuote() {
		$.get('api/quote', displayQuote)
	}

	function displayQuote(q) {
		$('#quote-title').html(q.title)
		$('#quote-content').html(q.content)
	}
})
