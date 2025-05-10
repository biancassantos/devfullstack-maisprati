/* 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let matrizModificada = []
let somaElementosDiagonalS = 0

for (let i = 0; i < 3; i++) {
  matriz[i] = []

  for (let j = 0; j < 3; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 2) {
      somaElementosDiagonalS += matriz[i][j]
    }
  }
}

let mediaDiagonalS = somaElementosDiagonalS / 3

for (let i = 0; i < 3; i++) {
  matrizModificada[i] = []

  for (let j = 0; j < 3; j++) {
    if (i === j) {
      matrizModificada[i][j] = matriz[i][j] * mediaDiagonalS
    } else {
      matrizModificada[i][j] = matriz[i][j]
    }
  }
}

console.table(matriz)
console.table(matrizModificada)