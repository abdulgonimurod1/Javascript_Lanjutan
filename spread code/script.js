// Spread Operator
// memecah iterable menjadi single element

// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['goni', 'abu', 'patah'];
// const ortu = ['tata', 'soleh'];
// const keluarga = [...mhs, ...ortu];

// console.log(keluarga);

// Mengcopy Array

// const mhs = ['goni', 'abu', 'patah'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar'
// console.log(mhs);

const liMhs = document.querySelectorAll('li');
// const mhs = [];

// for (let i = 0 ; i <liMhs.length; i++){
//     mhs.push(liMhs[i].textContent)
// }
// console.log(mhs)

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML= huruf;