'use strict';
var fs=require('fs');

//read in file path
var fpath = process.argv[2];
if( typeof(fpath) === "undefined" ){
        console.log("Please provide a path");
        return 0
}

fs.readFile(fpath, function(err, data){
	if (err) throw err; //immediately return an error

	//break data by newline and count elements, minus 1 for last line
	var cnt = data.toString().split('\n').length-1;
	console.log(cnt);
});
