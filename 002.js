// Competencies: Loopings
/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height. 
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
1
12
123
contoh 2 (height = 5):
1
12
123
1234
12345
 
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

// var kata = 'abcdef';
// var kataa = '';
// for(var i = kata.length -1; i >= 0; i--){
//     kataa = kataa + kata[i];
//     console.log(kataa)
// }

var height = 5;
var hasil = [];
var i = 1
for (var i = 1; i <= height; i++){
   hasil = hasil + i
console.log(hasil)
}