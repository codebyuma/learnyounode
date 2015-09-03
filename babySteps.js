/* BABY STEPS
 Exercise 2 of 13

Write a program that accepts one or more numbers as command-line arguments 
and prints the sum of those numbers to the console (stdout).*/


var total =0;
// iterate through the arguments array and add each number to the total

for (var i=2; i<process.argv.length; i++){
	total+=Number(process.argv[i]);
}

console.log(total);