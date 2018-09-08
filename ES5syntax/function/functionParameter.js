//Passing Information to Functions
function showMessage(message) {
console.log(message);
}
showMessage('First Message');
showMessage('Second Message');


function showMessages(message, anotherMessage) {
console.log(message, anotherMessage);
}
showMessages('First Message', 'Second Message');

//Function Return Values
function triplePlus(value) {
let newValue = value + value + value;
return newValue;
}
console.log( triplePlus(3) ); // 9
