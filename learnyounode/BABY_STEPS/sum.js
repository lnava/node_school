"use strict";

//read in variables and cast to Number
var args = process.argv.slice(2).map(Number);
/*calculate the sum
*use Array().reduce prototype & Arrow function
*/

var sum = args.reduce((prev,cur)=>prev+cur,0);

console.log(sum);
