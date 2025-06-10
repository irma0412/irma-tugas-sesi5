import kalkulator from './rumus.js'; // Mengimpor default export dari rumus.js
import readline from 'readline';

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Minta input dari pengguna
console.log("Nama: Irma Suryani")
console.log("Tugas Sesi 4")
console.log("KALKULATOR")
inputUser.question('Masukkan angka pertama: ', angka1 => {
    inputUser.question('Masukkan angka kedua: ', angka2 => {
        inputUser.question('Masukkan operator (+, -, *, /): ', operator => {

            console.log(
                `Hasil: ${kalkulator(
                    parseFloat(angka1),
                    parseFloat(angka2),
                    operator
                )}`
            );

            inputUser.close();
        });
    });
});
