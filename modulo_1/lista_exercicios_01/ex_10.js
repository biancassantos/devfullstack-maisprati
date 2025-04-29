/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número: "))

if (Number.isInteger(num)) {
  for (let i = 1; i <= 10; i++) {
    console.log(num)
  }

} else {
  console.log("Valor inválido.")
}