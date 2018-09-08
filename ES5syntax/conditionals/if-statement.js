if (5 === 5) { // true
console.log('Yes');
}
if (5 > 10) { // false
console.log('No');
}
if (5 >= 5) { // true
console.log('Yes');
}


let state = 'FL';
let taxPercent = 0;
if (state === 'FL') {
taxPercent = 7;
}
console.log(taxPercent); // 7

let state = 'FL';
let taxPercent = 7;
if (state !== 'FL') {
taxPercent = 0;
}
console.log(taxPercent); // 7
