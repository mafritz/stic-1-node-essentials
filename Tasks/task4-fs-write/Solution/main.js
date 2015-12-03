//Read ASYNC the notes in the notes.txt file which are on a 0-6 scale
//Use a given function to transform each note in a 0-20 score
//Write SYNC all the notes in a file named notes20.txt

//Include the file system module
var fs = require('fs');

//Given function to trasform notes in a 0-20 scale
function trasform20(n) {
    return Math.round(n * 20/6);
}

//Read ASYNC the notes from the file
fs.readFile('notes.txt', 'utf8', function (error, data) {
    //Throw an error in case
    if (error) throw error;
    //Obtain an array with the .split(",") method
    var notes = data.split(",");
    //Use the array .map() method with the given function to obtain a new array with notes on 20.
    var newNotes = notes.map(trasform20);
    //Write the array as a joined string to the file notes20.txt
    fs.writeFileSync('notes20.txt', newNotes.join(","));
    //Output a confirmation message
    console.log("The new file has been saved!");
});