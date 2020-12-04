// ==== MATERI ====

// ===== Kategori function : =======
// 1. built in function
//     misalkan : alert, confirm, prompt, console.log, etc
// 2. user defined function




// ===== User Defined Function terdiri atas 2 jenis : =====
// 1. function declaration
//     contoh :

    // function tambah(a,b) {

    //     let total;

    //     total = a + b;
    //     return total;
    // }



// 2. function expression
//     contoh :

    // const tambah = function(a,b) {
    //     let total;

    //     total = a + b;
    //     return total;
    // }
    
    // tambah(1,2);




// === Rekursif Function ===
// Function yang memanggil dirinya sendiri dan akan berhenti pada keadaan tertentu
// mirip dengan Looping For
// Rekursif ini digunakan juga sebagai pengganti perulangan bagi bahasa pemrograman yang tidak memiliki perulangan

// ==== CONTOH : ====

    // function loop(n) {

    //     if(n === 0) {
    //         return;
    //     }
    //     console.log(n);

    //     return loop(n-1);
    // }

    // loop(10);


    // ** Faktorial **

    // function faktorial(n) {
    //     if(n === 0) return 1;

    //     return n * faktorial(n-1);
    // }

    // const hasil = faktorial(5);
    // alert(hasil);

    // => Output = 120









// ==== LATIHAN ====

// ===== Latihan function 1 =====
// 1. function declaration

// function jumlahVolumeKubus(a,b) {
//     return (a * a * a) + (b * b * b);
// }

// console.log(jumlahVolumeKubus(2,4))

// 2. Function expression

// const jumlahVolumeKubus = function (a,b) {
//     return (a * a * a) + (b * b * b); 
// }

// const hasil = jumlahVolumeKubus(2,4);
// console.log(hasil)



// ===== Latihan Function 2 =====
// Kasus : parameter di function lebih banyak dari argument yang dikirimkan

// const tambah = function(a,b,c,d) {
//     let total = a + b + c + d;
//     return total;
// }

// const hasil = tambah(1,2,3);
// console.log(hasil)

// Outpu => NaN


//  ===== Latihan Function 3 =====
// argument yang dikirimkan tidak diketahui jumlahnya
// Menggunakan perulangan For untuk me-looping semua argument yang dikirimkan

//  const tambah = function() {
//     let total = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }

//     return total;
// }

// const hasil = tambah(100,10,200,30,100);

// console.log(hasil);



// ===== latihan function 4 =====
// Rekursif
// Faktorial

// const faktorial = function(n) {
    
//     if(n === 0) {
//         return 1;
//     }

//     faktorial(n-1);
// }

// const hasil = faktorial(3);

// console.log(hasil)



//  ====== Latihan Function 5 =====
// Refactoring Function Agar lebih singkat


// == Sebelum Refactoring

// const jumlahVolumeKubus = function(a,b) {
//     let volumeA = 0;
//     let volumeB = 0;
//     let total = 0;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// const hasil = jumlahVolumeKubus(2,3);

// console.log(hasil);



//  == Setelah Refactoring

// const jumlahVolumeKubus = function(a,b) {
    
//     return (a * a * a) + (b * b * b);
// }

// const hasil = jumlahVolumeKubus(2,3);

// console.log(hasil)
















// =========== PERCOBAAN ============
// Kasus :
// 1. Jumlah Argument tidak diketahui
// 2. Menggunakan Function Expession
// 3. Refactoring Function Agar lebih singkat

// const jumlahVolumeKubus = function() {

//     let total = 0;

//     for(let i = 0; i < arguments.length; i++) {
//         total += (arguments[i] * arguments[i] * arguments[i]);
//     }

//     return total
// }

// const hasil = jumlahVolumeKubus(2,3);

// console.log(hasil);
