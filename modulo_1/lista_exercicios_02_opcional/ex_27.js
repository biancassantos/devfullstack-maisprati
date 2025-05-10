/* 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final. */

const { validarNumero } = require('../helpers.js')

let matriz = []
let matrizMultiplicada = []

for (let i = 0; i < 6; i++) {
  matriz[i] = []

  for (let j = 0; j < 6; j++) {
    matriz[i][j] = validarNumero(`Valor da posição [${i}, ${j}]: `)
  }
}

let num = validarNumero("Informe um valor para multiplicar a matriz: ")

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    let valor = matriz[i][j] * num
    matrizMultiplicada.push(valor)
  }
}

console.table(matrizMultiplicada)