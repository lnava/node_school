//import fs module
var fs = require('fs');
//read in 1st commandline argument
var file = process.argv[2];

fs.readFile(file, function(err, contents){
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
});

/*fs.readFile(file, 'utf8', function(err, contents){
	var lines = contents.split('\n').length - 1;
	console.log(lines);
});
*/
