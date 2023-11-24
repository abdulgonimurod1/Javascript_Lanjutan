const angka = [-1, 8, 9, 10, 0, -5, -4, 3, -2, 7];

// Mencari angka >= 3

// Pake Looping For

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka)

// Filter

// const newAngka = angka.filter( a =>  a >= 3)

// console.log(newAngka)

// Map
// kalikan semua angka dengan 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka); 



// Reduce
// jumlahkan seluruh elemen pada array
// 0 + -1 + 8 + 9 + 10 + 0 + -5 + -4 + 3 + -2 + 7

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(newAngka);



// method Chaining
// cari angka > 4
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 4 ) // 8, 9, 10, 7
.map(a => a * 3) // 24, 27, 30,21
.reduce((acc, cur) => acc + cur); //102

console.log(hasil);