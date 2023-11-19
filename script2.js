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

// functioon membuat local Execution Context sendiri
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

let add = (function () {
    let counter = 0;
    return function() {
        return counter++;
    }
})();

console.log(add());
console.log(add());
console.log(add());