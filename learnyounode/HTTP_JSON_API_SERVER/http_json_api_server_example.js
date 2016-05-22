'use strict';
var http = require('http');
var url = require('url');

function parseTime(time){
	return {
		hour 	: time.getHours(),
		minute	: time.getMinutes(),
		second	: time.getSeconds(),
		};
}

function unixTime(time){
	return {
		unixtime : time.getTime()
	};
}

var server = http.createServer(function(req, res){
	//parse URL
	var parsedUrl = url.parse(req.url, true);
	var time = new Date(parsedUrl.query.iso);
	//prepare return variable
	var result;

	//pass time object to the appropriate funciton
	if ( /^\/api\/parsetime/.test(req.url) ){
		result = parseTime(time);
	}else if( /^\/api\/unixtime/.test(req.url) ){
		result = unixTime(time);
	}

	//return result if successful, otherwise return 404 error
	if ( result ){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	}else{
		res.writeHead(404);
		res.end();
	}
});

server.listen(Number(process.argv[2]));
