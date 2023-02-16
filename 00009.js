// Palindrome

// Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

function palindrome(kata) {
  // you can only write your code here!
  const arr = kata.split('');
  let firstWord = '';
  let lastWord = '';
  for (let i = 0; i < arr.length / 2; i++) {
    firstWord += arr[i];
    lastWord += arr[arr.length - i - 1];
  }
  return firstWord === lastWord;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
