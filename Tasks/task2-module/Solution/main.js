//Use the cours.js module to output this message in the console:
//ERGO 1 est un cours du Master MALTT qui porte sur Ergonomie, UX, Interaction Design

//Include the cours module with relative path
var cours = require('./cours.js');

//Set the course name
cours.setName("ERGO 1");

//Add the three subjects
cours.addSubject("Ergonomie");
cours.addSubject("UX");
cours.addSubject("Interaction Design");

//Print the description in the console
console.log(cours.info());