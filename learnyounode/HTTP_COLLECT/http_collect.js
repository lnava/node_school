'use strict';
//import http module
var http = require('http');
//read command line arguments
var url = process.argv[2];
//setup String and Counter for get returns
var getString = "";
var getCnt = 0;

var req = http.get(url, function(response){
	response.setEncoding("utf8");
	response.on("error", console.error);
	response.on("data", function(data){
		getString += data;
		getCnt+=data.length;
	});
	response.on("end", function(){
		console.log(getCnt);
		console.log(getString);
	});

}).on("error", console.error);
