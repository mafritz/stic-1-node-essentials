//Arguments from the console are available in the process.argv array
//process.argv[0] = node
//process.argv[1] = [script filename]
//process.argv[2] = first parameter in the console
//process.argv[3] = second parameter in the console
//...
var name = process.argv[2];
console.log("Hello " + name);
