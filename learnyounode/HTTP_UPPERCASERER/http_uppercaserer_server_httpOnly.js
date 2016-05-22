'use strict';
//import http modules
var http = require('http');

//import commandline parameters
var port = Number(process.argv[2]);

//create http server and requestListener callback
var server = http.createServer(function(req, res){

	//setup return string
	var str="";
	
	if (req.method === "POST"){
		//write header to the request
		res.writeHead("200", {'content-type':'text/plain'});

		//build the return string
		req.on('data', function(data){
			str += data.toString().toUpperCase();
		});

		req.on('end', function(){
			res.end(str);
		});
	}

});

server.listen(port);
