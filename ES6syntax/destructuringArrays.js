let carIds = [1, 2, 5];
let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);
// 1 2 5

let carIds = [1, 2, 5];
let car1, remainingCars;
[car1, ... remainingCars] = carIds;
console.log(car1, remainingCars);
// 1 [ 2, 5 ]

let carIds = [1, 2, 5];
let remainingCars;
[, ... remainingCars] = carIds;
console.log(remainingCars);
// [ 2, 5 ]


let carIds = [2,3,4];
let [car1,car2,car3] =carIds;
console.log(car2);
//3

let carIds = [2,3,4];
let car1,car2, car3;

[, car2,...car3] =carIds;

console.log(car1,car2,car3);
// 3 [4]
