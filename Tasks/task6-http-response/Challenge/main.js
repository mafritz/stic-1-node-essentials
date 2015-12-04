//Task: Fill in the myServer() function so that it can send out a simple html message as a response
//Include the http module
var http = require(/* ... */);

//Create a server, pass a function that handles request/response and listen to http://localhost:1337
http.createServer(/* ... */).listen(1337, '127.0.0.1');

//The myServer() function that handles the request/response
function myServer(/* ... */, /* ... */) {
    //Tell in the head that it is text/html page
    response.writeHead('text/html');
    //Send back the final response with a h1 title saying "Hello Node.js!"
    response.end("<h1>Hello Node.js</h1>"); 
}

//Console message confirming that the server is running
console.log("Server is running at http://localhost:1337");