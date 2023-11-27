// Destructing Variable / Assignment

// Destructing Array

const perkenalan = ['halo', 'nama', 'saya', 'goni'];

// const [a,b,c,d] = perkenalan;

// Skipping item
// const [a,,,d] = perkenalan;

// swap item
// let a = 1;
// let b = 2;
// [a,b] = [b,a]
// console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(b);


// return value pada function

// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();

// console.log(b);

// data banyak pake Rest Parameter
// const [a, ...values] = [1,2,3,4,5,6,7];
// console.log(a);
// console.log(values);



// Destructuring Object
// const mhs = {
//     nama : 'goni',
//     umur : 21
// }

// const {nama,umur} = mhs;
// console.log(umur)

// Destructuring tanpa deklasrasi Object

// ({nama,umur} = {nama : 'goni',umur : 21});
// console.log(umur)

// Assign ke variable baru
// const mhs = {
//     nama : 'goni',
//     umur : 21
// }

// const {nama:n,umur:u} = mhs;
// console.log(u)

// Memberikan Default value + assign variable baru

// const mhs = {
//     nama : 'goni',
//     umur : 21,
//     email: 'goni@gmail.com' 
// }

// const {nama:n,umur:u, email:e = 'default@gmail.com'} = mhs;
// console.log(e);


// Rest parameter
// const mhs = {
//         nama : 'goni',
//         umur : 21,
//         email: 'goni@gmail.com' 
//     }
    
//     const {nama, ...value} = mhs;
//     console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter function

const mhs = {
    id : 123,
    nama : 'goni',
    umur : 21,
    email: 'goni@gmail.com' 
}

function getIdMhs({id}) {
    return id;
};

console.log(getIdMhs(mhs))