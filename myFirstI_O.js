/*MY FIRST I/O!
 Exercise 3 of 13

Write a program that uses a single synchronous filesystem operation to read a file and print the number 
of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument. You do not need to make 
your own test file. 

// read a file and print the number of newlines ('\n') it contains to the console
// first argument, after learnyounode and myFirstI_O.js, is the path to the file

*/

var fs = require ('fs'); // load the filesystem - fs - module from the Node core library

var filePath = process.argv[2]; // third item entered, the first argument.

var contents = (fs.readFileSync(filePath)).toString(); // read in the file contents and convert the resulting Buffer object to a String

var splitContents = contents.split('\n'); // convert string into an array using the new line as a delimiter

console.log((splitContents.length)-1); // the length of the array minus 1 = the number of '\n' characters
