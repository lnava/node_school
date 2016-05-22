//import http and bl modules
var http = require('http');
var bl = require('bl');

//read in command line arguements (Expect 3 URLS)
var urls = process.argv.slice(2);
var urlCnt = urls.length;
//setup empty return array
var ret = [];

//iterate over URLs
urls.forEach(function(url, index){
	//perform a get call for each URL
	http.get(url, function(response){
		//pipe the response to a buffer-list
		response.pipe(bl(function(err, data){
			//immediately return any errors
			if (err) 
				return console.error(err);

			//add data.toString() to ret array			
			ret[index] = data.toString();
			//print out data when ret array is full (length = urlCnt)
			if(ret.length == urlCnt){
				ret.forEach(function(str){
					console.log(str);
				});
			}
		}));	
	}).on('error', console.error);
});
