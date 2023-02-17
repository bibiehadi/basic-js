// Ubah Huruf

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
  // you can only write your code here!
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const arr = kata.split('');
  let ads = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (arr[i] === alphabet[j]) {
        ads.push(alphabet[j + 1]);
      }
    }
  }
  return ads.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
