// for...of

// Array

// const mhs = ['goni','abu','patah'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]); 
// }

// mhs.forEach(m => console.log(m));

// mhs.forEach((m,i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`) )

// for (const m of mhs) {
//     console.log(m);
// }

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }


// String

// const nama = 'goni';

// for (const n of nama){
//     console.log(n)
// }


// NodeList

// const liNama = document.querySelectorAll('.li');

// liNama.forEach(n => {
//     console.log(n.textContent);   
// });

// for (const n of liNama){
//     console.log(n)
// }

// Arguments

// function jumlahAngka(){
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5))


// for ... in

const mhs = {
    nama : 'goni',
    umur : 21,
    hobi : 'sepak bola'
}

for (m in mhs){
    console.log(mhs[m])
}