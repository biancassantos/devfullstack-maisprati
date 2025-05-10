/* 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let somaLinha4 = 0
let somaColuna2 = 0
let somaDiagonal = 0
let somaElementos = 0

for (let i = 0; i < 5; i++) {
  matriz[i] = []

  for (let j = 0; j < 5; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaElementos += matriz[i][j]

    if (i === j) somaDiagonal += matriz[i][j]

    if (i === 3) somaLinha4 += matriz[i][j]
    
    if (j === 1) somaColuna2 += matriz[i][j]
  }
}

console.log(`A soma dos elementos da linha 4 é: ${somaLinha4}`)
console.log(`A soma dos elementos da coluna 2 é: ${somaColuna2}`)
console.log(`A soma dos elementos da diagonal principal é: ${somaDiagonal}`)
console.log(`A soma de todos os elementos da matriz é: ${somaElementos}`)
console.table(matriz)