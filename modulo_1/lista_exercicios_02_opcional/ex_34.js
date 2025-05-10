/* 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let matrizModificada = []

for (let i = 0; i < 50; i++) {
  matriz[i] = []

  for (let j = 0; j < 50; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 50; i++) {
  let elementoDiagonalP = matriz[i][i]
  matrizModificada[i] = []

  for (let j = 0; j < 50; j++) {
    matrizModificada[i][j] = matriz[i][j] * elementoDiagonalP
  }
}

console.table(matriz)
console.table(matrizModificada)