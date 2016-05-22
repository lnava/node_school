//import http modules
var http = require('http');

//read in command line arguements (Expect 3 URLS)
var urls = process.argv.slice(2);
var urlCnt = urls.length;
var retCnt = 0; //do not print until we have recieved 3 response endings
//setup empty return array
var ret = Array(urlCnt);
for(var i=0; i<urlCnt; i++){
	ret[i] = '';
}

//iterate over URLs
urls.forEach(function(url, index){
	//perform a get call for each URL
	http.get(url, function(response){
		//set endconding
		response.setEncoding('utf8');
		//implement error handling
		response.on('error', console.error);

		//concat data streams into return array
		response.on('data', function(data){
			ret[index] += data;
		});

		//handle ending of data stream, and print if all streams are complete		
		response.on('end', function(){
			retCnt++;	
			//print out data when ret array is full (length = urlCnt)
			if(ret.length == retCnt){
				ret.forEach(function(str){
					console.log(str);
				});
			}
		});	
	}).on('error', console.error);
});
