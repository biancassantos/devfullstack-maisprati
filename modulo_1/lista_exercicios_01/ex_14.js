/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número para descobrir seu fatorial: "))
let fatorial = 1

if (Number.isInteger(num) && num >= 0) {

  if (num != 0 || num != 1) {
    for (let i = num; i >= 2; i--) {
      fatorial *= i
    }
  }

  console.log(`O fatorial de ${num} é ${fatorial}.`)

} else {
  console.log("Valor inválido para fatorial.")
}