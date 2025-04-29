/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if */

const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '))

if (num % 2 === 0) {
  console.log("O número é PAR.")
} else if (num % 2 >= 1 && Number.isInteger(num)) {
  console.log("O número é ÍMPAR.")
} else {
  console.log("Valor inválido.")
}