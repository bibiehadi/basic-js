// X dan O

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!
  const arr = str.split('');
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') countX++;
    if (arr[i] === 'o') countO++;
  }
  return countX === countO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
