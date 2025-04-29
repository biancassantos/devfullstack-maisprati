/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

let quantidadeMacas = Number(prompt("Informe a quantidade de maçãs compradas: "))
let total

if (quantidadeMacas < 12 && Number.isInteger(quantidadeMacas)) {
  total = quantidadeMacas * 0.3
} else if (quantidadeMacas >= 12 && Number.isInteger(quantidadeMacas)) {
  total = quantidadeMacas * 0.25
} else {
  console.log("Quantidade inválida.")
}

if (total) {
  console.log(`O valor total da compra é R$ ${total.toFixed(2)}`)
}