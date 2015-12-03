//Structure of a simple module
//Variables that are private to the module
var name = "STIC I";
var subjects = ['HTML5', 'Programmation', 'JavaScript', 'Interactivité'];

//The exports object makes things available outside the module
exports.addSubject = function (subject) {
    subjects.push(subject);
}
exports.about = function () {
    return name + " est un cours du Master MALTT qui porte sur " + subjects.join(", ");
}
