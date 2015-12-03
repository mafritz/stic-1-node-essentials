//Include the file system module
var fs = require('fs');

//Define some content to be written (simulate the userInput)
var userInput = "This text should be written by the user";

//Write (or overwrite if the file exists) the content in a text file inside the created_files folder
//ASYNC function
fs.writeFile('./created_files/fileasync.txt', userInput, function (error) {
    //Throw an error if it occurs
    if (error) throw error;
    //Output to the console
    console.log("The file has been saved!");
});
//Output to see the order of execution
console.log("This message comes from the console at the end of the code.")