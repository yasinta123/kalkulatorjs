const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama :" ));
const operator = readline.question("Masukkan Operator (+,-,*,/) :" );
const angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua:" ));

if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    return console.log("Inputan tidak sesuai !!!");
} else {


const hasil = execute(angkaPertama,angkaKedua,operator);
console.log('Hasilnya adalah $(hasil)');

}

function execute(angkaPertama,angkaKedua,operator){
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            
        case "%":
            
        default:
            console.log("operator tidak valid");


    }
}