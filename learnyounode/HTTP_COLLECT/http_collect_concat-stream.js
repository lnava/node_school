'use strict';
//import http module
var http = require('http');
//import concatStream module
var concatStream = require('concat-stream');
//read command line arguments
var url = process.argv[2];
//setup String and Counter for get returns
var getString = "";
var getCnt = 0;

var req = http.get(url, function(response){
	response.on('error', console.error);
	response.pipe(concatStream(function(data){
		console.log(data.length);
		console.log(data.toString());
		})
	);

}).on("error", console.error);
