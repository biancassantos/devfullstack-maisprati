/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require('prompt-sync')();

let primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "))
let razao = Number(prompt("Digite a razão da PA: "))
let soma = 0

if (Number.isFinite(primeiroTermo) && Number.isFinite(razao)) {

  for (let i = 1; i < 11; i++) {
    let termo = primeiroTermo + (i - 1) * razao
    soma += termo
    console.log(termo)
  }

  console.log(`A soma dos 10 primeiros valores da PA é ${soma}`)

} else {
  console.log("Valores inválidos.")
}