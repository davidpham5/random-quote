'use strict';

var axios = require('axios');
var express = require('express');
var hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;
app.set('views engine', 'hbs');
// point to scripts and styles in public directory
app.use(express.static('public'));

//app.use('/', require('./routes/index'))
app.use('/', require('./routes/quote'))
app.use('/api/quote', require('./routes/api/quote'))

app.listen(port, () => {
	console.log(`Server is up on port: ${port}`);
});

module.exports = {
	app: app
}