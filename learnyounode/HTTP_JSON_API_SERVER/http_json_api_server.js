'use strict';
//import http/url modules
var http = require('http');
var url = require('url');

//import commandline arguments
var port = Number(process.argv[2]);

//setup server
var server = http.createServer(function(req, res){
	//read in the path from the request
	var myUrl = url.parse(req.url, true);
	if ( typeof(myUrl.query.iso) === 'undefined' ){
		return console.error("no iso time string provided in reqest");
	}
	//parse iso with a Date object
	var date = new Date(myUrl.query.iso);

	//handle requests with pathname /api/parsetime
	if ( myUrl.pathname === '/api/parsetime' ){
		//prepare return object
		var ret = {};
		//extract hour/minute/second
		ret.hour = date.getHours();
		ret.minute = date.getMinutes();
		ret.second = date.getSeconds();
		//return JSON string
		res.end(JSON.stringify(ret));
	}

	//handle requests with pathname /api/unixtime
	if ( myUrl.pathname === '/api/unixtime' ){
		//prepare return object
		var ret = {};
		//extract unixtime
		ret.unixtime=date.getTime();
		res.end(JSON.stringify(ret));
	} 

}).listen(port);//start listening
