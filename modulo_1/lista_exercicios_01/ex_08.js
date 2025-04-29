/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let val1 = Number(prompt("Digite o primeiro valor: "))
let val2 = Number(prompt("Digite o segundo valor: "))

if (val1 > val2) {
  console.log(`${val2}, ${val1}`)
} else if (val2 > val1) {
  console.log(`${val1}, ${val2}`)
} else {
  console.log("Não é possível comparar os valores.")
}