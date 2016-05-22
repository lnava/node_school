'use strict';

//import net module
var net = require('net');

//read in commanline args
var port = Number(process.argv[2]);

//create a server
var server = net.createServer(function(socket){
	//setup current data string
	var date = new Date();
//	var str = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";

	//format the string properly
	var str = "";
	//add Full Year
	str = date.getFullYear() + "-";
	//add current month (increment by 1 to match english standard), add leading 0 if month < 10,
	str += (date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1) + "-";
	//add current day, add leading 0 if day < 10;
	str += (date.getDate() < 10 ? "0" : "") + date.getDate() + " ";
	//add hour with leading 0
	str += (date.getHours() < 10 ? "0" : "") + date.getHours() + ":";
	//add minutes with leading 0
	str += (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
	//add trailing newline
	str += '\n';

	//write str to socket and end connection
	socket.end(str);
});

server.listen(port);
