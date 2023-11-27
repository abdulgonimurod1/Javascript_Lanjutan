// Destructuring

// function kalkulasi(a,b){
//     return [a + b,a - b, a * b, a / b];
// }

// const tambah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const[jumlah,kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const[tambah,kurang,kali,bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi)


// function kalkulasi (a, b) {
//     return {
//     tambah : a + b,    
//     kurang : a - b,
//     kali : a * b,
//     bagi : a / b,
// }};

// const {tambah,bagi,kurang,kali} = kalkulasi(2,3);

// console.log(kurang)


// Destructuring function arguments

const mhs1 = {
    nama : 'goni',
    umur : 21,
    email : 'abdulgoni@gmail.com',
    nilai :{
        tugas : 89,
        uas :79,
        uts : 80
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya adalah ${mhs.nama}, saya berumur ${mhs.umur} tahun.`
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({nama,umur,nilai : {tugas,uas,uts}}) {
        return `Halo, nama saya adalah ${nama}, saya berumur ${umur} tahun. dan nilai tugas saya adalah ${tugas}`
    }
    
    console.log(cetakMhs(mhs1));