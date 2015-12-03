//Include the file system module
var fs = require('fs');

//Read the content of the file async. (non-blocking) as a string (utf8) and execute a callback function
fs.readFile('file.txt', 'utf8', function (error, content) {
    //Throw an exception error if file reading files
    if(error) throw error;
    //Ouput content to the console
    console.log(content);
});
//Output message to see the order of execution
console.log('This message is from the console!');