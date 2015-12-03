//Include the file system module
var fs = require('fs');

//Read the content synch. (i.e. blocking) as a string (utf8)
var content = fs.readFileSync('file.txt', 'utf8');
//Ouput content to the console
console.log(content);
//Output message to see the order of execution
console.log('This message is from the console!');