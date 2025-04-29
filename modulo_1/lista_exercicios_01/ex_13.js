/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números */

const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número decimal: "))
let soma = 0
let quantidadeNumeros = 0

while (num != 0) {
  if (Number.isFinite(num) && !Number.isInteger(num)) {
    soma += num
    quantidadeNumeros++
  }

  num = Number(prompt("Digite outro número decimal: "))
}

let media = (soma / quantidadeNumeros).toFixed(2)

console.log(`A média dos números decimais digitados é ${media}.`)