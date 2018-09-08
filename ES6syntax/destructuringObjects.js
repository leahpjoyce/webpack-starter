let car = { id: 5000, style: 'convertible' };
let { id, style } = car;
console.log(id, style);
// 5000 convertible

let car = { id: 5000, style: 'convertible' };
let id, style;
{ id, style } = car; // error!
console.log(id, style);

let car = { id: 5000, style: 'convertible' };
let id, style;
({ id, style } = car);
console.log(id, style);
// 5000 convertible
