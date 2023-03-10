// di data structure, yang harus student achieve:
// - forming sebuah array berisikan object
// - bisa mengakses isi terdalam dari array berisikan object
// - bisa melakukan operasi filtering / grouping data

// ---------------
// Students Report
// ---------------
// PROBLEM
// =======
// Diberikan sebuah function bernama getReport.
// Function akan menerima sebuah parameter array of object dengan format:
// [
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   ...
// ]
// Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
// Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
// [
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   ...
// ]
// Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
// Standard kelulusan adalah minimum 70.

function getReport(studentGrades) {
  // only code here.
  const classAPass = [];
  const classBPass = [];
  const classCPass = [];

  const classAFail = [];
  const classBFail = [];
  const classCFail = [];
  studentGrades.map((student) => {
    if (student.classCode === 'A' && student.score >= 70) {
      classAPass.push(student.name);
    } else if (student.classCode === 'A' && student.score <= 70) {
      classAFail.push(student.name);
    } else if (student.classCode === 'B' && student.score >= 70) {
      classBPass.push(student.name);
    } else if (student.classCode === 'B' && student.score <= 70) {
      classBFail.push(student.name);
    } else if (student.classCode === 'C' && student.score >= 70) {
      classCPass.push(student.name);
    } else if (student.classCode === 'C' && student.score <= 70) {
      classCFail.push(student.name);
    }
  });

  return [
    { classCode: 'A', passed: classAPass, failed: classAFail },
    { classCode: 'B', passed: classBPass, failed: classBFail },
    { classCode: 'C', passed: classCPass, failed: classCFail },
  ];
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));
