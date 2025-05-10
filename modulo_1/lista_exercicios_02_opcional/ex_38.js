/* 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require('prompt-sync')();
const { validarNumero } = require('../helpers.js')

let numeros = []

function menu() {
  console.log("--------------------------")
  console.log("Escolha uma das opções:")
  console.log("1- soma dos elementos")
  console.log("2- produto dos elementos")
  console.log("3- média dos elementos;")
  console.log("4- ordene os elementos em ordem crescente")
  console.log("5- mostre o vetor")
  let res = Number(prompt(">> "))

  return res
}

function somaArr(arr) {
  return arr.reduce((acc, value) => acc + value, 0)
}

function produtoArr(arr) {
  let produto = 1

  arr.forEach(num => produto *= num)

  return produto
}

function mediaArr(arr) {
  let soma = somaArr(arr)
  return (soma / arr.length).toFixed(1)
}

function ordenaArr(arr) {
  return arr.sort((a, b) => a - b)
}

// Programa principal
for (let i = 1; i <= 6; i++) {
  let num = validarNumero(`Informe o ${i} valor: `)
  numeros.push(num)
}

let opcao = menu()

while (!Number.isInteger(opcao) || opcao < 1 || opcao > 5) {
  console.log("Opção inválida.")
  opcao = menu()
}

console.log("--------------------------")

switch (opcao) {
  case 1:
    let soma = somaArr(numeros)
    console.log(`A soma dos elementos do array é ${soma}`)
    break
  case 2:
    let produto = produtoArr(numeros)
    console.log(`O produto dos elementos do array é ${produto}`)
    break
  case 3:
    let media = mediaArr(numeros)
    console.log(`A média dos elementos do array é ${media}`)
    break
  case 4:
    console.log(ordenaArr(numeros))
    break
  case 5:
    console.log(numeros)
    break
}