/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')();

let totalSoma = 0

for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Informe o ${i}º número: `))

  if (Number.isFinite(num)) {
    totalSoma += num
  }
}

console.log(`A soma dos números válidos é ${totalSoma}.`)