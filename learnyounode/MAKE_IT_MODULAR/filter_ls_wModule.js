var mymodule=require('./mymodule.js');

if (process.argv.length !== 4){
        return console.error(path.basename(process.argv[1]) + ": Incorrect number of arguments");
}
//assign commandline args to variables
var dirname = process.argv[2];
var ext = process.argv[3];

mymodule(dirname, ext, function(err, data){
	if (err) console.error(err);
	
	data.forEach(function(elem){
		console.log(elem)
	});
});
