'use strict';

var axios = require('axios');
var express = require('express');
var hbs = require('hbs');
var htmlToText = require('html-to-text');

var url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

var app = express();
var port = process.env.PORT || 3000;

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
app.set('views engine', 'hbs');
app.set('css', __dirname + '/styles');

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
    app: app,
    //getQuote: getQuote,
}