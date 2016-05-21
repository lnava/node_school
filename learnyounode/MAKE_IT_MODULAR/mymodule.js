//import modules
var fs=require('fs');
var path=require('path');
module.exports = function filtered_ls(dirname, ext, callback){
	//add leading '.' to ext
	if(ext[0] !== '.'){
		ext = '.' + ext;
	}

	fs.readdir(dirname, function(err, data){
		//quick return error
		if (err) return callback(err);

		//iterate over data and add matches to return array
		var ret=[];
		data.forEach(function(elem){
			if(path.extname(elem) === ext){
				ret.push(elem); //remove a single element from array
			}
		});
		
		//return resulting data array to callback function
		callback(null, ret);
	});
}

