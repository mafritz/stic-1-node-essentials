//Installation of a module through npm
//Before executing this script you must install the module
//Run this script at this position in you system :
//npm install figlet
//This creates a folder node_modules/ with a folder figlet inside it

//Include the installed module just with its name
var figlet = require('figlet');

//Use the async method .text() to write Node.js" in ASCII art
figlet.text("Node.js", function(error, data) {
    if (error)
        console.error(error);
    else
        console.log(data);
});