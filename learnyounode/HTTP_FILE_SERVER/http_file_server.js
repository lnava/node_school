'use strict';
//import http and fs modules
var http = require('http');
var fs = require('fs');

//read in command line arguements
var port = Number(process.argv[2]);
var fpath = process.argv[3];

var server = http.createServer(function(req, res){
	fs.createReadStream(fpath).pipe(res);
});
server.listen(port);
