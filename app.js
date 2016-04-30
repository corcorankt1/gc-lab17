var express = require('express');
var app = express();
// var http = require('http');
var quote = require("./quotes");

var index = Math.floor(Math.random()*quote.length+1);

app.get('/', function(req,res){
	res.send(quote[index]);
});

app.listen(8888, function(){
	console.log('Example app listening on port 8888!');
});



// console.log(newQuote);