//Include the http module
var http = require('http');

//Create a web server that listens at http://localhost:1337
http.createServer(function (request, response) {
    //Obtain the request url
    var url = request.url;
    //We prepare the head to be simple text
    response.writeHead('text/plain');
    //Determine the output based on the request
    if(url == '/') {
        
        response.end("Welcome to our home page!");
        
    } else if (url == "/about") {
        
        response.end("Discover something about us!");
        
    } else {
        
        response.end("The page does not exist!");
        
    }
}).listen(1337, '127.0.0.1');

//Console message confirming that the server is running
console.log("Server is running at http://localhost:1337");