let state = 'FL';
let taxPercent;
if (state === 'FL') {
  taxPercent = 7;
  }
  else {
  taxPercent = 0;
  }
  console.log(taxPercent); // 7


let state = 'FL';
let taxPercent = 0;
if (state === 'FL') {
  taxPercent = 7;
  }
  else if (state === 'NY') {
  taxPercent = 8.875;
  }
  console.log(taxPercent); // 7
