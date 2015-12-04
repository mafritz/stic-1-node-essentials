//Task: create a web server that expects either "/" or "/about" and output the content of files "index.html" or "about.html" respectively
//Hint: you must read the content of the file (use the fs.readFileSync() methode)

//Include the http module
var http = require('http');
//Include the fs module
var fs = require('fs');

//Create a web server listening at http://localhost:1337
http.createServer(function (request, response) {
    //Obtain the url of the quest
    var url = request.url;
    //Prepare the head to be text/html
    response.writeHead('text/html');
    //Determine the output based on the url requested
    if(url == '/') {
        var html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    } else if (url == '/about') {
        var html = fs.readFileSync('about.html', 'utf8');
        response.end(html);
    } else {
        response.end('<h1>404 Error! Page not found!</h1>');
    }
}).listen(1337, '127.0.0.1');

//Console message confirming that the server is running
console.log("Server is running at http://localhost:1337");