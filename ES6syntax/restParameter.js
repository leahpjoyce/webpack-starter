
function sendCars(...allCarIds) {
allCarIds.forEach( id => console.log(id));
}
sendCars(100, 200, 555);
// 100 200 555

function sendCars(day, ...allCarIds) {
allCarIds.forEach( id => console.log(id));
}
sendCars('Monday', 100, 200, 555);
// 100 200 555

function sendCars(...allCarIds) {
allCarIds.forEach( id => console.log(id));
}
sendCars('Monday', 100, 200, 555);
// Monday 100 200 555

let alphabet = ['A','B','C'];
myNames = [...alphabet];

console.log(myNames);
//["A", "B", "C"]
