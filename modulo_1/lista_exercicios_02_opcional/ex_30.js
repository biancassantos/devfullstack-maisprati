/* 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let somaLinhas = [0, 0, 0, 0, 0]
let somaColunas = [0, 0, 0, 0, 0]

for (let i = 0; i < 5; i++) {
  matriz[i] = []

  for (let j = 0; j < 5; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaLinhas[i] += matriz[i][j]
    somaColunas[i] += matriz[j][i]
  }
}

console.table(matriz)
console.log("Soma das linhas:")
console.log(somaLinhas)
console.log("Soma das colunas:")
console.log(somaColunas)