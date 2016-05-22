'use strict';
//import http/through2-map modules
var http = require('http');
var map = require('through2-map');

//import commandline parameters
var port = Number(process.argv[2]);

//create http server and requestListener callback
var server = http.createServer(function(req, res){
	//write header to the request
	res.writeHead("200", {'content-type':'text/plain'});
	//stream req.body to map, convert to uppercase, send to res.
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);
