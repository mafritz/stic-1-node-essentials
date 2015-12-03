//Include the file system module
var fs = require('fs');

//Define a variable with some content (simulate user input)
var userInput = "This text should be written by the user."

//Write (or overwrite if the file exists) the content in a text file inside the created_files folder
//SYNC function
fs.writeFileSync('./created_files/filesync.txt', userInput);

//Output to the console
console.log("The file has been saved!");

//Output to see the order of execution
console.log("This message comes from the console at the end of the code.")