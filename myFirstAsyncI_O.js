/* MY FIRST ASYNC I/O!
 Exercise 4 of 13

Write a program that uses a single asynchronous filesystem operation to read a file and print the 
number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.*/



var fs = require ('fs'); // load the filesystem - fs - module from the Node core library

var filePath = process.argv[2]; // third item entered, the first argument.

// if send in utf8 as second variable into readFile, it will return a String instead of a Buffer object
fs.readFile(filePath, 'utf8', function (error, data){

	if (!error){
		var splitContents = data.split('\n');
		console.log((splitContents.length)-1);
	}


});



