for (let i=0; i<4; i++) {
if (i === 2) {
continue;
}
console.log(i);
}
// 0 1 3


let i = 0;

for(; i<12; i++){
  if(i === 8) {
    break;
  }
}
console.log(i); //8

for(let i = 0; i<5; i++) {
  console.log(i);
  if(i === 3)
    break;
}

// 0 1 2 3
