//Include the module with the relative path
var stic = require('./stic.js');

//Call the public method about a first time
console.log(stic.about());

//Call the public method addSubject with an argument to add to the private array
stic.addSubject('Node.js');

//Call the public method about a second time, with the Node.js argument added at the end
console.log(stic.about());
