"use strict";
//import fs module
var fs = require('fs');

//read in filepath
var fpath = process.argv[2];
if( typeof(fpath) === 'undefined' ){
	console.log("Please provide a path");
	return 0
}
//read in file to buffe
var buf = fs.readFileSync(fpath);
//cast buffer to string
var str = buf.toString();
//count lines
var cnt = str.split("\n").length-1;
console.log(cnt);
