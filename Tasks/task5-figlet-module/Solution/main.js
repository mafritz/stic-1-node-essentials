//Task: when the user run the command node main.js "Text" the script returns the "TEXT" (uppercase) in ASCII form
//Install with npm and include the figlet module
var figlet = require('figlet');

//Retrieve the first argument of the command line with the process.argv array and transform it to uppercase
var textToASCII = process.argv[2].toUpperCase();

//Use the async method .text() to write the text in ASCII art
figlet.text(textToASCII, function(error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
});