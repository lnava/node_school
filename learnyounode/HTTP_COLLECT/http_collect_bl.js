'use strict';
//import http module
var http = require('http');
//import bufferlist module
var bl = require('bl');
//read command line arguments
var url = process.argv[2];
//setup String and Counter for get returns
var getString = "";
var getCnt = 0;

var req = http.get(url, function(response){
	response.pipe(bl(function(err,data){
		if (err) return console.error("There was an error", err);
		
		console.log(data.length);
		console.log(data.toString());
		})
	);

}).on("error", console.error);
