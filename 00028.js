// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
  // you can only write your code here!
  const arr = num.split('');
  let bIndex = null;
  let aIndex = null;
  for (let i = 0; i < arr.length; i++) {
    if (bIndex - aIndex >= 3) {
      return true;
    }
    if (arr[i] === 'a') {
      aIndex = i;
    }
    if (arr[i] === 'b') {
      bIndex = i;
    }
    // console.log(aIndex + ' ' + bIndex);
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
