//Read ASYNC. the notes in the file notes.txt and output the mean to the console
//Expected result : 4.666666666666667

//Include the file system module
var fs = require(/* ... */);

//Read the file async. as a string
fs.readFile(/* ... */, /* ... */, function (error, data) {
    //Throw an error in case
    if (error) throw error;
    //Build an array from the string using the function split() and the "," as separator
    var notes = /* ... */;
    //Create a total variable to hold the sum of the notes
    var total = 0;
    //Iterate through each note and add it to the total
    notes.forEach(function (n) {
        total += /* ... */;
    });
    //Calculate the mean by total / number of notes
    var mean = total / /* ... */;
    //Output the mean to the console
    console.log(mean);
});