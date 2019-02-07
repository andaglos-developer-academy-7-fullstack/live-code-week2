// Competencies: Functions and Arrays
/*
Instruksi
=========
Buatlah beberapa function berikut:
1. multiplication, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan mengalikan dua angka dan mereturn hasil perkaliannya.
  contoh
  ------
  input: multiplication(3, 6)
  output: 18
2. powerMe, yang menerima dua parameter berupa num1 dan num2. Function tersebut akan memangkatkan num1 dengan num2 (num1 dipangkat dengan num2) dan mereturn hasil perpangkatannya.
  Boleh menggunakan sintaks Math.pow  
  contoh
  ------
  input: powerMe(2, 3)
  output: 8
3. evenSiblings, yang menerima satu parameter berupa angka, dimana setiap angka yang dimulai dari 1 menuju angka tersebut, semua angka yang genap masuk ke dalam array.
Return array tersebut.
  contoh
  ------
  input: evenSiblings(15)
  proses: dari 0 - 15 yang habis dibagi 2: 2, 4, 6, 8, 10, 12, 14 
  output: [2, 4, 6, 8, 10, 12, 14]
*/

console.log("***PERKALIAN***")
function multiplication(nilai1, nilai2) {
  const perkalian = nilai1 * nilai2;
  return perkalian;
}
console.log(multiplication(3, 6));
console.log("==============================")

console.log("***PERPANGKATAN***")
function powerMe(nilai1, nilai2) {
  const perpangkatan = Math.pow(nilai1, nilai2);
  return perpangkatan;
}
console.log(powerMe(2, 3));
console.log("==============================")

console.log("***HABIS DI BAGI 2***")
function evenSiblings(nilai) {
  let habisdibagi2 = [];
  for (let i = 1; i <= nilai; i++) {
    if (i % 2 === 0) {
      habisdibagi2.push(i);
    }
  }
  return habisdibagi2;
}
console.log(evenSiblings(15));
console.log("==============================")