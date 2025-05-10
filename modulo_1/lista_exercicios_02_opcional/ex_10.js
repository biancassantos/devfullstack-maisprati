/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const { validarNumero, validarOpcao } = require('../helpers.js')

let res
let soma = 0
let quantidadeDigitada = 0
let menorValor
let quantidadePares = 0

let opcoes = ["s", "n"]

do {
  let num = validarNumero("Digite um número: ")
  
  soma += num
  quantidadeDigitada++

  if (!menorValor || num < menorValor) {
    menorValor = num
  }

  if (num % 2 === 0) {
    quantidadePares++
  }

  res = validarOpcao("Deseja continuar? [S/N] ", opcoes)

} while (res != "n")

let media = soma / quantidadeDigitada

console.log("------------------------------")
console.log(`O somatório entre todos os valores é ${soma}.`)
console.log(`O menor valor digitado foi ${menorValor}.`)
console.log(`A média entre todos os valores é ${media}`)
if (quantidadePares === 1) {
  console.log(`Apenas um valor digitado é par.`)
} else {
  console.log(`${quantidadePares} valores digitados são pares.`)
}