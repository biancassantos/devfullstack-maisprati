/* 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada. */

const { validarInteiro } = require('../helpers.js')

let matriz = []
let matrizModificada = []

function maiorValor(arr) {
  let maior

  arr.forEach(valor => {
    if (!maior || valor > maior) {
      maior = valor
    }
  })

  return maior
}

for (let i = 0; i < 12; i++) {
  matriz[i] = []

  for (let j = 0; j < 13; j++) {
    matriz[i][j] = validarInteiro(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 12; i++) {
  let maiorNumero = maiorValor(matriz[i])
  matrizModificada[i] = []

  for (let j = 0; j < 13; j++) {
    matrizModificada[i][j] = matriz[i][j] / maiorNumero
  }
}

console.table(matriz)
console.table(matrizModificada)