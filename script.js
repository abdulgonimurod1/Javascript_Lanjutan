// Cara membuat object pada Javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak

// let mahasiswa = {
//     nama : "Abdul Goni Murod",
//     energi : 100,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;

//         console.log(`Halo  ${this.nama}, selamat makan`)
//     }
// }

// 2. Function Declaration

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${mahasiswa.nama}, selamat bermain`);
//     }

//     return mahasiswa;
// }

// let goni = Mahasiswa('goni', 10)

// 3. Constructor Function
// keyword new

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

let goni = new Mahasiswa('Abdul Goni', 20)