'use strict';

//import net module
var net = require('net');
//import strftime module
var strftime = require('strftime');

//read in commanline args
var port = Number(process.argv[2]);

//create a server
var server = net.createServer(function(socket){
	//use strftime module to read and format Date object
	var str = strftime('%F %H:%M\n', new Date());
	//write str to socket and end connection
	socket.end(str);
});

server.listen(port);
