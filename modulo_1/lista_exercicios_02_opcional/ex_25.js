/* 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let somaColunas = Array(20).fill(0)

for (let i = 0; i < 15; i++) {
  matriz[i] = []

  for (let j = 0; j < 20; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 20; j++) {
    somaColunas[j] += matriz[i][j]
  }
}

console.table(somaColunas)