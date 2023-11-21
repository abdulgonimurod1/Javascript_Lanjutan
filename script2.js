// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Abdul Goni';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// ini disebut hoisting

// window = global object
// this = window

// execution phase

// var nama = 'Abdul Goni Murod';
// var umur = 21;

// console.log(sayHello())
// function sayHello(){
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// function membuat local Execution Context sendiri
// yang di dalamnya terdapat creation dan execution phase
// window
// argumen
// hoisting

// function satu() {
//     var nama = "Abdul Goni";
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = "erik";
// satu();
// dua("Dodi");
// console.log(nama);

// Lexical Scope

// function init() {
//     // let nama = "Abdul Goni Murod";
//     return function(nama){
//         console.log(nama);
//     }
//     // return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Abdul Goni Murod');
// panggilNama('Abu Bakar');

// Factory Function

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga hari kamu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatMalam('Abdul Goni');

// Contoh Closure & Private Method

// let add = (function () {
//     let counter = 0;
//     return function() {
//         return counter++;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// Function Expression

// const nama = function(nama){
//     return `Halo ${nama}`
// };

// console.log(nama("Abdul Goni"))

// Arrow Function

// const nama = (nama) => {return `Halo, ${nama}`};
// console.log(nama("Abdul Goni Murod"));

// const nama = (nama, waktu) => {return `Halo, ${nama} selamat ${waktu}`};
// console.log(nama("Abdul Goni Murod", "Malam"));

// let nama = ['Abdul Goni Murod', 'Muhamad Soleh', 'Siti Suhiah']
// const jumlahNama = nama.map(function(nama){
//     return nama.length;
// });

// console.log(jumlahNama);

// const jumlahNama = nama.map(nama => nama.length);
// console.log(jumlahNama);

// const jumlahHuruf = nama.map(nama => ({ nama, jmlHuruf : nama.length}));
// console.table(jumlahHuruf);


// Implisit return
// const nama = nama =>  `Halo, ${nama}`;
// console.log(nama("Abdul Goni Murod"));

// const nama = () =>  `Hello world`;
// console.log(nama());


// Konsep this pada Arrow Function

// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Abdul Goni Murod';
//     this.umur = 21;
//     this.sayHello = function () {
//         console.log(`Halo, Nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//     }
// }

// const goni = new Mahasiswa();



// Arrow Function tidak memiliki konsep this

// const Mahasiswa = function () {
//     this.nama = 'Abdul Goni Murod';
//     this.umur = 21;
//     this.sayHello =  () => {
//         console.log(`Halo, Nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//     }
// }

// const goni = new Mahasiswa();

// const Mahasiswa = function () {
//     this.nama = 'Abdul Goni Murod';
//     this.umur = 21;
//     this.sayHello =  () => {
//         console.log(`Halo, Nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++)
//     }, 500)
// }

// const goni = new Mahasiswa();
