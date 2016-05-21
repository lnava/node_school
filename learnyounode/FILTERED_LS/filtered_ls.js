'use strict';
//import fs module
var fs = require('fs');
var path = require('path');

//make sure we recieved the proper number of arguments
if (process.argv.length != 4){
	return console.error(path.basename(process.argv[1]) + ": Incorrect number of arguments");
}
//assign commandline args to variables
var dirPath = process.argv[2];
var ext = process.argv[3];
//add leading '.' to ext if it is not already there
if (ext[0] != '.'){
	ext = '.' + ext;
}


//Perform async readdir
fs.readdir(dirPath, function(err, data){
	if(err) return console.error(err); //immediately return errors
	
	//loop through results and print iff file has the correct extenstion
	data.forEach(function(elem, index){
		if (path.extname(elem) === ext){
			console.log(elem);
		}
	});
});
