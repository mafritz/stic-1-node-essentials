//Include the http module
var http = require('http');

//Create a web server (listening to http://localhost:1337) 
//The server has an anonymous function that handles the request and the response and output a simple text message
http.createServer(function (request, response) {
    //Tell in the head of the response that the content is just text
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //Send the final response with a simple "Hello world" message
    response.end('Hello World\n');
}).listen(1337, "127.0.0.1");
 
//Console message confirming that the server is running
console.log('Server running at http://127.0.0.1:1337/');