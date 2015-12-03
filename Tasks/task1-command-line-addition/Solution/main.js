//Write a script that sums up two numbers given as first and second parameter in the command line
//Write the result on the console
//node main.js 100 50 --> 150
var firstNumber = parseInt(process.argv[2]); //Or also Number(process.argv[2])
var secondNumber = parseInt(process.argv[3]); //Or also Number(process.argv[3])
console.log(firstNumber + secondNumber);