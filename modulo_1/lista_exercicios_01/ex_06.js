/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

const prompt = require('prompt-sync')();

let ladoA = Number(prompt("Informe o primeiro lado do triângulo: "))
let ladoB = Number(prompt("Informe o segundo lado: "))
let ladoC = Number(prompt("Informe o terceiro lado: "))

let trianguloEValido = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB

if (!trianguloEValido) {
  console.log("Os valores informados não formam um triângulo válido.")

} else if (ladoA === ladoB && ladoB === ladoC) {
  console.log("O triângulo é equilátero.")

} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("O triângulo é isósceles.")

} else {
  console.log("O triângulo é escaleno.")
}