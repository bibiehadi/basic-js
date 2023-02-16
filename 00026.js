// Mengurutkan Abjad

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
  // you can only write your code here!
  const arr = str.split('');
  let sort = false;
  while (!sort) {
    let countSort = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        countSort++;
      }
    }
    sort = countSort === 0;
  }
  return arr.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
