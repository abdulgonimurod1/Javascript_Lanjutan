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

// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },

//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     },
    
//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

    

//     return mahasiswa;
// }

// let goni = Mahasiswa('goni', 10);

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur`
// }

// let goni = new Mahasiswa('Abdul goni', 10);


// versi class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain`;
    }

    tidur (jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }
}

let goni = new Mahasiswa('Abdul Goni', 10);



// 3. Constructor Function
// keyword new

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// let goni = new Mahasiswa('Abdul Goni', 20)