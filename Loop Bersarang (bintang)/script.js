// Loop Segitiga siku-siku 
let s = '';
function bintang(n) {
    for(let i = 1; i<=n; i++) {
        
        for(let j = 1; j<=i; j++) {
            s +='*'
        }
        s += '\n';
    }


    console.log(s);
}



// Loop Segitiga Siku-siku terbalik 
let s = '';

function bintang(n) {
    for(let i = 1; i <= n; i++) {

        // Mencetak Bintang
        for(let j = i; j <= n; j++) {
            s += '*';
        }
        // Mencetak Enter
        s += '\n'

    }

    console.log(s);
}


// Loop Segitiga Siku-siku rata kanan
let s = '';

function bintang(n) {

    // Menentukan Jumlah baris
    for(let i = 1; i <= n; i++) {

        // Membuat Spasi
        for(let j = 1; j <= n - i; j++) {
            s += ' ';
        }

        // Membuat bintang
        for(let k = 1; k <= i; k++) {
            s += '*';
        }

        // Membuat enter
        s += '\n';
    }

    // Mencetak hasil ke console
    console.log(s);
}


// Segitiga siku-siku terbalik rata kanan

let s = '';

const looping = function(n) {

    // Menentukan jumlah baris
    for(let i = 1; i <= n; i++) {

        // Membuat spasi
        for(let j = 1; j < i; j++) {
            s += ' ';
        }

        // Membuat bitang
        for(let k = i; k <= n; k++) {
            s += '*';
        }

        // Menanmbahkan baris baru
        s += '\n';
    }

    // Mencetak hasil
    console.log(s);
}




// Loop segitiga Sama Sisi
let s = '';

function bintang(n) {

    // Menentukan Jumlah Baris
    for(let i = 1; i <= n; i++) {

        // // Mencetak Spasi
        for(let j = 1; j <= n - i; j++) {
            s += ' ';
        }

        // Mencetak Bintang
        for(let k = 1; k <= i + (i - 1); k++) {
            s +='*';
        }

        // Menambahkan Enter
        s += '\n';
    }

    // Mencetak Hasil di console
    console.log(s)
}



// Loop Jajargenjang
let s = '';

function bintang(baris, kolom) {

    // Menentukan Jumlah baris
    for(let i = 1; i <= baris; i++) {

        // Mencetak spasi

        for(let j = i; j <= baris; j++) {
            s += ' ';
        }

        // Mencetak bintang

        for(let k = 1; k <= kolom; k++) {
            s +='*';
        }
        
        // Mencetak Enter
        s +='\n';
    }

    // Mencetak Hasil ke console
    console.log(s)
}