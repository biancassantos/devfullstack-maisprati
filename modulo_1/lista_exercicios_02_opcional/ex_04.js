/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.*/

const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Informe o primeiro lado do triângulo: "))
let ladoB = Number(prompt("Informe o segundo lado: "))
let ladoC = Number(prompt("Informe o terceiro lado: "))

let trianguloEValido = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB

if (trianguloEValido) {
  console.log("O valores informados formam um triângulo válido.")
} else {
  console.log("Os valores informados não formam um triângulo válido.")
}