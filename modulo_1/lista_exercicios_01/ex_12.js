/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite o número de que deseja ver a tabuada: "))

if (Number.isInteger(num)) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
  }

} else {
  console.log("Valor inválido para tabuada.")
}