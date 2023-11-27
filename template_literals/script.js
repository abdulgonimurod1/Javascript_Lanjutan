// Template literals / template string
// const nama = 'Abdul Goni';
// const umur = 33;
// console.log(`Halo, nama saya adalah ${nama}, saya berumur ${umur} Tahun`);

// Embed Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);

// Ternary Operator
// const x = 5;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); 

// Html fragments

// Latihan template literals

// const mhs = {
//     nama : 'Abdul Goni',
//     umur : 21,
//     hobi : 'Sepak bola'
// };

// const el = `<div class ="mhs">
// <h2>${mhs.nama}</h2>
// <span class="umur">${mhs.umur}</span>
// <span class="hobi">${mhs.hobi}</span>
// </div>`;

// 2.Looping

// const mhs = [
// {
//     nama : 'Abdul ',
//     umur : 21,
//     hobi : 'Sepak bola'
// },

// {
//     nama : 'Goni',
//     umur : 21,
//     hobi : 'Sepak bola'
// },

// {
//     nama : 'Murod',
//     umur : 21,
//     hobi : 'Sepak bola'
// }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.umur}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditional & ternary
// const lagu = {
//     judul : 'neneku pahlawanku',
//     penyanyi : 'Wali',
//     // feat : 'Gonni'
// };

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML fragments bersarang

// const mhs = {
//     nama : 'abdul goni',
//     semester : 1,
//     mataKuliah : [
//         'Pemrograman web',
//         'sistem informasi',
//         'pemrograman sistem interaktif'
//     ]
// };

// function cetakMataKuliah(mataKuliah){
//     return `
//     <ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;



// Tagged templates
// const nama = 'Abdul Goni Murod';
// const umur = 33;

// function coba (strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, Nama saya ${nama}, saya berumur ${umur} tahun`
// console.log(str);

// Highlight

const nama = 'Abdul Goni Murod';
const umur = 33;

function highlight (strings, ...values){
   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, Nama saya ${nama}, saya berumur ${umur} tahun`

document.body.innerHTML = str;