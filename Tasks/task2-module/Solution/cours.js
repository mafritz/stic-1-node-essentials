//DO NOT CHANGE THIS FILE
//This is the cours module
//Private variables
var name;
var subjects = [];

//Public method to set the name of the course
exports.setName = function (n) {
    name = n;
}

//Public method to add a new subject to the private array
exports.addSubject = function (s) {
    subjects.push(s);
}

//Public method to return a course description
exports.info = function () {
    return name + " est un cours du Master MALTT qui porte sur " + subjects.join(", ");
}